import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className="aside">
        <h2>Aside</h2>
        <div>
          <MyLink active icon="home" to="/">
            Home
          </MyLink>
          <MyLink icon="bell" to="/reminders">
            Reminders
          </MyLink>
          <MyLink icon="plane" to="/">
            Arhive
          </MyLink>
          <MyLink icon="trash" to="/">
            Trash
          </MyLink>
        </div>
      </div>
    );
  }
}

export default AppAside;
