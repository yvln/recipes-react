import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// import './SaveButton.css';

class SaveButton extends Component {
  render() {
    const { justAddedToFav, whichRecipe } = this.props;
    return (
      <div className="SaveButton">
        <button onClick={() => {justAddedToFav(whichRecipe)}}>
          SAVE THIS RECIPE TO THE FAVOURITE
        </button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  justAddedToFav: PropTypes.func.isRequired,
  whichRecipe: PropTypes.object.isRequired,
};

export default SaveButton;
