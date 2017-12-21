import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecipeBox.css';

import SaveButton from '../buttons/SaveButton';
import DeleteButton from '../buttons/DeleteButton';

class RecipeBox extends Component {

  render() {
    const { whichRecipe, justDeletedFromFav, justAddedToFav } = this.props;
    const { image_url, title, source_url, publisher, social_rank } = whichRecipe;
    return (
      <div className={`RecipeBox
                      ${this.props.mode === 'results' ? 'resultsSearch' : 'favouriteRecipes'}
                      ${this.props.idFav === whichRecipe.current_id ? 'addedToFav' : ''}
                      ${this.props.idDeleted === whichRecipe.current_id ? 'deletedFromFav' : ''}`}>

        <h1 className='title'>{title}</h1>

        <img className='recipeImage' alt='dish' src={image_url} />
        <a href='source_url'>See this recipe published by {publisher}</a>
        <span>Social rank: {social_rank}</span>

        {this.props.mode === 'favourites' &&
          <DeleteButton
            whichRecipe={whichRecipe}
            justDeletedFromFav={justDeletedFromFav} />
        }

        {this.props.mode === 'results' &&
          <SaveButton
            whichRecipe={whichRecipe}
            justAddedToFav={justAddedToFav} />
        }

      </div>
    );
  }
}

RecipeBox.propTypes = {
  justDeletedFromFav: PropTypes.func,
  justAddedToFav: PropTypes.func,
  whichRecipe: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
};

export default RecipeBox;
