import React, { Component } from 'react';
import linkS from './myLink.module.css';

class MyLink extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <a className={this.props.active ? linkS.active : linkS.link} href="/">
        <i className={`fa fa-${this.props.icon}`}></i>
        {this.props.children}
      </a>
    );
  }
}

export default MyLink;
