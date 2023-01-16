import React from 'react';

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Dekku anime</h2>
        <h3 className="text-sm text-gray-500">Serie manga anime</h3>
      </div>
      <button className="font-semibold text-blue-500 text-sm">Sign out</button>
    </div>
  );
}
