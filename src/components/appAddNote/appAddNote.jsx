import React, { Component } from 'react';
import Card from '../common/card/card';
import './style.css';

import Joi from 'joi-browser';

class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
    errors: {},
  };

  schema = {
    title: Joi.string().alphanum().min(3).max(20).required(),
    body: Joi.string().min(5).required(),
  };

  validateNote() {
    const result = Joi.validate(this.state.newNote, this.schema, { abortEarly: false });
    if (!result.error) return null;
    console.log(result.error.details);
    const errors = result.error.details.reduce((acc, cur) => {
      return { ...acc, [cur.path[0]]: cur.message };
    }, {});
    return errors;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateNote();
    if (errors) return this.setState({ errors: errors });

    this.props.onNewNote(this.state.newNote);
    this.setState({ newNote: { title: '', body: '' } });
  };

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  render() {
    const { newNote } = this.state;
    return (
      <div className="add-note">
        <Card raised>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              value={newNote.title}
              onChange={this.syncInput}
              className="input"
              name="title"
              type="text"
              placeholder="Title"
            />
            <textarea
              value={newNote.body}
              onChange={this.syncInput}
              className="input textarea"
              name="body"
              placeholder="Take a note..."
              // rows="1"
            ></textarea>
            <button className="link-like" type="submit">
              Close
            </button>
          </form>
        </Card>
      </div>
    );
  }
}

export default AppAddNote;
