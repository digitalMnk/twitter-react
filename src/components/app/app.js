import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [
          {label: 'Going to learn Javascript', important: true, like: false, id: 1},
          {label: 'Going to learn React', important: false, like: false, id: 2},
          {label: 'Going to learn JSX', important: true, like: false, id: 3},
        ]
      };

    this.maxId = 4;


    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex((post) => post.id === id);
      const elem = data[index];

      // Без спрэд оператора:
      // const newElem = {
      //   label: elem.label,
      //   important: !elem.important,
      //   like: elem.like,
      //   id: elem.id
      // };
      // Со спрэд оператором:
      const newElem = {...elem, important: !elem.important};

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newElem, ...after];

      return {
        data: newArr
      }

    })
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex((post) => post.id === id);
      const elem = data[index];

      const newElem = {...elem, like: !elem.like};

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newElem, ...after];

      return {
        data: newArr
      }
    })
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const result = [...before, ...after];

      return {
        data: result
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    // const {data} = this.state;
    const data = this.state.data;
    const allPosts = data.length;
    const likedPosts = data.filter(post => post.like);

    return (
      <div className="app">
        <AppHeader allPosts={allPosts} likedPosts={likedPosts.length}/>
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddFrom
          onAdd={this.addItem}/>
      </div>
    );
  }
};

export default App;
