/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';

export default function Post({ username, userImg, img, caption, id }) {
  const { data: session } = useSession();
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

      {/**POST BUTTONS */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/**POST COMMENTS */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/**POST INPUT BOX */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
          />
          <button className="text-blue-500 font-bold">Post</button>
        </form>
      )}
    </div>
  );
}
