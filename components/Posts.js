import React from 'react';
import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'admin',
      userImg:
        'https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg',
      img: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      caption: 'great',
    },
    {
      id: '2',
      username: 'lolo',
      userImg:
        'https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg',
      img: 'https://images.unsplash.com/photo-1671725501831-b7f678fa0241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      caption: 'beautiful',
    },
    {
      id: '3',
      username: 'sasa',
      userImg:
        'https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg',
      img: 'https://images.unsplash.com/photo-1673261077665-581069aac65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80',
      caption: 'nice',
    },
    {
      id: '4',
      username: 'dede',
      userImg:
        'https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg',
      img: 'https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      caption: 'good',
    },
    {
      id: '5',
      username: 'coco',
      userImg:
        'https://i.pinimg.com/originals/8e/9a/45/8e9a45396b98f9c31256ab7d589d6480.jpg',
      img: 'https://images.unsplash.com/photo-1673558347350-06f419b03e1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
      caption: 'wonderful',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
