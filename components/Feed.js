import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

export default function Feed() {
  return (
    <main>
      <section>
        {/**STORIES */}
        <Stories />

        {/**POSTS */}
        <Posts />
      </section>
      <section>
        {/**MINI PROFILE */}

        {/**SUGGECTIONS */}
      </section>
    </main>
  );
}
