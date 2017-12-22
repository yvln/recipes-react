import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Button2.css';

class ViewMoreButton extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className='ViewMore Button2Container'>
        <Link to={`/recipe/${id}`}>
          <button className='Button2'>VIEW MORE</button>
        </Link>
      </div>
    );
  }
}

ViewMoreButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewMoreButton;
