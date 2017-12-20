import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageFavourites.css';
import Title from '../elements/Title';
import ViewListRecipes from '../views/ViewListRecipes';
import NewSearchButton from '../buttons/NewSearchButton';

class PageFavourites extends Component {
  render() {
    return (
      <div className="PageFavourites">
          this is PAGE FAVOURITE
          <Title 
            title='Favourite Recipes'/>
          <ViewListRecipes />
          <NewSearchButton />
      </div>
    );
  }
}

export default PageFavourites;
