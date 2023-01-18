/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@/firebase';
import Moment from 'react-moment';

export default function Post({ username, userImg, img, caption, id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
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
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src={comment.data().userImage}
                alt="user image"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data.timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/**POST INPUT BOX */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="text-blue-500 font-bold disabled:text-blue-200"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
