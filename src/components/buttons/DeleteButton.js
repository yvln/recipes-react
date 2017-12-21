import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// import './DeleteButton.css';

class DeleteButton extends Component {
  render() {
    const { justDeletedFromFav, whichRecipe } = this.props;
    return (
      <div className="DeleteButton">
        <button onClick={() => {justDeletedFromFav(whichRecipe)}}>
            DELETE
        </button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  justDeletedFromFav: PropTypes.func.isRequired,
  whichRecipe: PropTypes.object.isRequired,
};

export default DeleteButton;
