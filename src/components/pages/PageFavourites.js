import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageFavourites.css';

import Title from '../elements/Title';
import RedirectButton from '../buttons/RedirectButton';
import RecipesFavourites from '../../containers/RecipesFavourites';

class PageFavourites extends Component {
  render() {
    return (
      <div className="PageFavourites">
          <Title
            title='Favourite Recipes'/>
          <RedirectButton />
          <RecipesFavourites />
      </div>
    );
  }
}

export default PageFavourites;
