import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Button2.css';

class DeleteButton extends Component {
  render() {
    const { justDeletedFromFav, id } = this.props;
    return (
      <div className='Button2Container'>
        <button className='Button2' onClick={() => {justDeletedFromFav(id)}}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  justDeletedFromFav: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
