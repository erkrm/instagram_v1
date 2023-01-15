import React from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/solid';

export default function Post({ username, userImg, img, caption, id }) {
  return (
    <div className="bg-white my-7  border rounded-md">
      {/**POST HEADER */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/**POST IMAGE */}

      <img className="object-cover w-full" src={img} alt={username} />
    </div>
  );
}
