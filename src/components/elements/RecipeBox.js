import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecipeBox.css';

import ViewMoreButton from '../buttons/ViewMoreButton';
import SaveButton from '../buttons/SaveButton';
import DeleteButton from '../buttons/DeleteButton';

class RecipeBox extends Component {

  render() {
    const { mode, idFav, idDeleted, whichRecipe, justDeletedFromFav, addToFavourite } = this.props;
    const { image_url, title, source_url, publisher } = whichRecipe;
    return (
      <div className={`RecipeBox
                      ${mode === 'results' ? 'resultsSearch' : 'favouriteRecipes'}
                      ${idFav && idFav.indexOf(whichRecipe.recipe_id) !== -1 ? 'addedToFav' : ''}
                      ${idDeleted == whichRecipe.recipe_id ? 'deletedFromFav' : ''}`}>

        <h1 className='title'>{title}</h1>

        <img className='recipeImage' alt='dish' src={image_url} />
        <a className='recipeLink' href={source_url} target='_blank'>See this recipe published by {publisher}</a>

        { this.props.mode === 'favourites' &&
          <div className='recipeBoxButtons'>
            <ViewMoreButton
              id={whichRecipe.recipe_id} />
            <DeleteButton
              text='DELETE'
              id={whichRecipe.recipe_id}
              justDeletedFromFav={justDeletedFromFav} />
          </div>
        }

        { this.props.mode === 'results' && this.props.idFav.indexOf(whichRecipe.recipe_id) === -1 &&
          <div className='recipeBoxButtons'>
            <ViewMoreButton
              id={whichRecipe.recipe_id} />
            <SaveButton
              addToFavourite={addToFavourite}
              id={whichRecipe.recipe_id} />
          </div>
        }
        { this.props.mode === 'results' && this.props.idFav.indexOf(whichRecipe.recipe_id) !== -1 &&
          <div className='recipeBoxButtons'>
            <ViewMoreButton
              id={whichRecipe.recipe_id} />
            <DeleteButton
              text='UNSAVE'
              id={whichRecipe.recipe_id}
              justDeletedFromFav={justDeletedFromFav} />
          </div>
        }

      </div>
    );
  }
}

RecipeBox.propTypes = {
  justDeletedFromFav: PropTypes.func,
  addToFavourite: PropTypes.func,
  whichRecipe: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  idDeleted: PropTypes.string,
  idFav: PropTypes.array,
};

export default RecipeBox;
