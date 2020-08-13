import React, {Component} from 'react';
import './post-list-item.css';

// const PostListItem = ({label, important = false}) => {
//
//
// };

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {important: props.important,
                  like: false};
    this.toggleImportant = this.toggleImportant.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleImportant() {
    this.setState(state => ({
      important: !state.important
    }));
  }
  toggleLike() {
    this.setState(state => ({
      like: !state.like
    }));
  }


  render(){
    let classNames = "app-list-item d-flex justify-content-between";
    if (this.state.important) {
      classNames += ' important';
    }
    if (this.state.like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span onClick={this.toggleLike} className="app-list-item-label">
          {this.props.label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={this.toggleImportant} type="button" className="btn-star btn-sm">
            <i className=" fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className=" fa fa-trash"></i>
          </button>
          <i className=" fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostListItem;
