import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';

import './app.css';

const App = () => {

  const data = [
    {label: 'Going to learn Javascript', important: true, id: 'sdfg'},
    {label: 'Going to learn React', important: false, id: 'hhth'},
    {label: 'Going to learn JSX', important: true, id: 'serg'},
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddFrom />
    </div>
  );
};

export default App;
