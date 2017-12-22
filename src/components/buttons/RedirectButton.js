import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Button1.css';

class RedirectButton extends Component {
  render() {
    return (
      <div className='Button1Container'>
        {this.props.mode === 'newsearch' &&
        <Link to='/'>
          <button className='Button1'>
            {this.props.text}
          </button>
        </Link>
        }
        {this.props.mode === 'gobackresults' &&
        <Link to='/recipes'>
          <button className='Button1'>
            {this.props.text}
          </button>
        </Link>
        }
      </div>
    );
  }
}

export default RedirectButton;
