import Image from 'next/image';
import React from 'react';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atom/modalAtom';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className=" flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/**LEFT */}
        <div className="h-32 w-32 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
            alt=""
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
            alt=""
            layout="fill"
            className="object-contain"
          />
        </div>
        {/**MIDDLE */}

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/**RIGHT */}
        <div className="flex space-x-4 items-center">
          <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              />
              <img
                onClick={signOut}
                className="h-12 cursor-pointer rounded-full"
                src={session.user.image}
                alt="user-image"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
