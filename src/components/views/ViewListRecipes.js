import React, { Component } from 'react';
// import './ViewListRecipes.css';

import RecipeBox from '../elements/RecipeBox';
import NewSearchButton from '../buttons/NewSearchButton';

class ViewListRecipes extends Component {
  render() {
    return (
      <div className="ViewListRecipes">
        this is VIEW LIST RECIPES
        <NewSearchButton />
      </div>
    );
  }
}

// {RecipeBox}

export default ViewListRecipes;
