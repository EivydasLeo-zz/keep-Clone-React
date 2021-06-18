import React, { Component } from 'react';
import './style.css';

class AppAddNote extends Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('siusti');
  };

  render() {
    return (
      <div className="add-note">
        <div className="inner-note">
          <form onSubmit={this.handleSubmit}>
            <input className="input" type="text" name="title" placeholder="Title" />
            <textarea
              className="input textarea"
              name="body"
              placeholder="Take a note..."
            ></textarea>
            <button className="link-like" type="submit">
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AppAddNote;
