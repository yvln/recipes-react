import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './PageRecipesResults.css';

import Title from '../elements/Title';
import RecipesResults from '../../containers/RecipesResults';
import RedirectButton from '../buttons/RedirectButton';

class PageRecipesResults extends Component {
  render() {
    return (
      <div className='PageRecipesResults'>
        <RedirectButton
          mode='newsearch'
          text='MAKE A NEW SEARCH' />
        <RecipesResults />
      </div>
    );
  }
}

export default PageRecipesResults;
