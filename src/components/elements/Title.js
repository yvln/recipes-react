import React, { Component } from 'react';
// import './Title.css';

class Title extends Component {
  render() {
    return (
      <h1 className="Title">{this.props.title}</h1>
    );
  }
}

export default Title;
