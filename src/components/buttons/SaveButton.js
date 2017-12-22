import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Button2.css';

class SaveButton extends Component {
  render() {
    const { addToFavourite } = this.props;
    return (
      <div className='Save Button2Container'>
        <Link to='/recipes'>
          <button className='Button2' onClick={() => {addToFavourite(this.props.id)}}>
            SAVE
          </button>
        </Link>
      </div>
    );
  }
}

SaveButton.propTypes = {
  addToFavourite: PropTypes.func.isRequired,
};

export default SaveButton;
