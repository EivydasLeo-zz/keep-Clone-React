import React, { Component } from 'react';
import ourStyles from './style.module.css';

class OneNote extends Component {
  state = {};
  render() {
    const { title, body } = this.props.note;
    return (
      <div className={ourStyles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default OneNote;
