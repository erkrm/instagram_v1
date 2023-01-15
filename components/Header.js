import Image from 'next/image';
import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className=" flex items-center justify-between max-w-6xl">
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
      <h1>Rigth side</h1>
    </div>
  );
}
