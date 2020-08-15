import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((post) => {
    return (
      <li key ={post.id} className="list-group-item">
        <PostListItem
          onDelete={() => onDelete(post.id)}
          onToggleImportant={() => onToggleImportant(post.id)}
          onToggleLiked={() => onToggleLiked(post.id)}
          label={post.label}
          important={post.important}
          like={post.like} />
      </li>
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default PostList;
