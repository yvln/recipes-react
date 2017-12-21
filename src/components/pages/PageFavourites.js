import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageFavourites.css';

import Title from '../elements/Title';
import ViewListFavourites from '../views/ViewListFavourites';
import NewSearchButton from '../buttons/NewSearchButton';

class PageFavourites extends Component {
  render() {
    return (
      <div className="PageFavourites">
          <Title
            title='Favourite Recipes'/>
          <ViewListFavourites />
          <NewSearchButton />
      </div>
    );
  }
}

export default PageFavourites;
