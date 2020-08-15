import React from 'react';
import './app-header.css';

const AppHeader = ({allPosts, likedPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1> My Name</h1>
      <h2>{`Всего записей: ${allPosts}, понравилось: ${likedPosts}`}</h2>
    </div>
  );
};

export default AppHeader;
