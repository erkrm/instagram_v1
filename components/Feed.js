import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section>
        {/**STORIES */}
        <Stories />

        {/**POSTS */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        {/**MINI PROFILE */}

        {/**SUGGECTIONS */}
      </section>
    </main>
  );
}
