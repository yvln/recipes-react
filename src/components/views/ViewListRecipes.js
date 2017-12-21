import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ViewListRecipes.css';

import RecipeBox from '../elements/RecipeBox';
import NewSearchButton from '../buttons/NewSearchButton';

class ViewListRecipes extends Component {

  state = {
    idFav: null,
  }

  justAddedToFav = (which) => {
    const { addToFavourite } = this.props;
    this.setState({
      idFav: which.recipe_id
    });
    addToFavourite(which);
  }

  renderRecipeBox = () => {
    const { listResults, addToFavourite } = this.props;
    return listResults.map( (e, id) => {
      return <RecipeBox
                mode='results'
                key={id}
                justAddedToFav={this.justAddedToFav}
                idFav={this.state.idFav}
                whichRecipe={e}
                />
    })
  }

  render() {
    return (
      <div className='ViewListRecipes'>
        <div className='recipesBoxes'>{this.renderRecipeBox()}</div>
        <NewSearchButton />
      </div>
    );
  }

}

ViewListRecipes.propTypes = {
  listResults: PropTypes.array.isRequired,
  addToFavourite: PropTypes.func.isRequired,
};

export default ViewListRecipes;
