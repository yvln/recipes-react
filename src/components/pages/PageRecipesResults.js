import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageRecipesResults.css';
import ViewListRecipes from '../views/ViewListRecipes';

class PageRecipesResults extends Component {
  render() {
    return (
      <div className="PageRecipesResults">
          this is the PAGE RECIPES RESULTS
          <ViewListRecipes />
      </div>
    );
  }
}

export default PageRecipesResults;
