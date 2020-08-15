import React from 'react';
import './post-add-form.css';

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {onAdd} = this.props;
    return (
      <div className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="write something"
          className="form-control new-post-label"
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => onAdd('Hello World')}>
        Add
        </button>
      </div>
    )
  }
}
