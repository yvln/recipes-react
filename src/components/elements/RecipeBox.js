import React, { Component } from 'react';

import './RecipeBox.css';

import SaveButton from '../buttons/SaveButton';
import DeleteButton from '../buttons/DeleteButton';
import ViewMoreButton from '../buttons/ViewMoreButton';

class RecipeBox extends Component {
  render() {
    const { image_url, title, source_url, publisher, social_rank } = this.props;
    return (
      <div className='RecipeBox'>
        <h1 className='title'>{title}</h1>
        <img className='recipeImage' alt='dish' src={image_url} />
        <a href='source_url'>See this recipe published by {publisher}</a>
        <span>Social rank: {social_rank}</span>
        <DeleteButton />
        <SaveButton />
        <ViewMoreButton />
      </div>
    );
  }
}

export default RecipeBox;
