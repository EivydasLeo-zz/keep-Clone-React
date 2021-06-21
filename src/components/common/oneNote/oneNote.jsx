import React, { Component } from 'react';
import Card from '../card/card';
import ourStyles from './style.module.css';

class OneNote extends Component {
  state = {};
  render() {
    const { title, body } = this.props.note;
    return (
      <Card>
        <h3>{title}</h3>
        <p>{body}</p>
      </Card>
    );
  }
}

export default OneNote;
