import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './NewSearchButton.css';

class NewSearchButton extends Component {
  render() {
    return (
      <div className="NewSearchButton">
        <button>
          <Link to="/">
            BACK TO SEARCH VIEW
          </Link>
        </button>
      </div>
    );
  }
}

export default NewSearchButton;
