import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './PageRecipesResults.css';

import ViewListRecipes from '../views/ViewListRecipes';
import NewSearchButton from '../buttons/NewSearchButton';

class PageRecipesResults extends Component {
  render() {
    return (
      <div className="PageRecipesResults">
          <ViewListRecipes />
          <NewSearchButton />
      </div>
    );
  }
}

export default PageRecipesResults;
