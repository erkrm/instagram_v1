import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      {/**LEFT */}

      <div className=" flex items-center justify-between max-w-6xl">
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
        <h1>Rigth side</h1>
      </div>

      {/**MIDDLE */}

      {/**RIGHT */}
    </div>
  );
}
