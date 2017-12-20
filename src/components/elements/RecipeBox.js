import React, { Component } from 'react';
// import './RecipeBox.css';

import SaveButton from '../buttons/SaveButton';
import DeleteButton from '../buttons/DeleteButton';
import ViewMoreButton from '../buttons/ViewMoreButton';

class RecipeBox extends Component {
  render() {
    return (
      <div className="RecipeBox">
        THIS IS A RECIPE BOX
        <DeleteButton />
        <SaveButton />
        <ViewMoreButton />
      </div>
    );
  }
}

export default RecipeBox;
