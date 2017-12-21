import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './ViewListFavourites.css';

import RecipeBox from '../elements/RecipeBox';
import NewSearchButton from '../buttons/NewSearchButton';

class ViewListFavourites extends Component {
  state = {
    idDeleted: null,
  }

  justDeletedFromFav = (which) => {
    const { deleteFromFavourite } = this.props;
    this.setState({
      idDeleted: which.recipe_id
    });
    setTimeout(deleteFromFavourite(which), 1000);
  }

  renderRecipeBox = () => {
    const { favouriteRecipes } = this.props;
    return favouriteRecipes.map( (e, id) => {
      return <RecipeBox
                mode='favourites'
                key={id}
                idDeleted={this.state.idDeleted}
                whichRecipe={e}
                justDeletedFromFav={this.justDeletedFromFav}
                />
    })
  }

  render() {
    return (
      <div className='ViewListFavourites'>
        <div className='recipesBoxes'>{this.renderRecipeBox()}</div>
        <NewSearchButton />
      </div>
    );
  }

}

ViewListFavourites.propTypes = {
  favouriteRecipes: PropTypes.array.isRequired,
  deleteFromFavourite: PropTypes.func.isRequired,
};

export default ViewListFavourites;
