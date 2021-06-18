import React, { Component } from 'react';
import './style.css';

class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('siusti');
  };

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  render() {
    const { newNote } = this.state;
    return (
      <div className="add-note">
        <div className="inner-note">
          <form onSubmit={this.handleSubmit}>
            <input
              value={newNote.title}
              onChange={this.syncInput}
              className="input"
              type="text"
              name="title"
              placeholder="Title"
            />
            <textarea
              value={newNote.body}
              onChange={this.syncInput}
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
