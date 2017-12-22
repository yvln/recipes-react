import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './ViewListFavourites.css';

import RecipeBox from '../elements/RecipeBox';

class ViewListFavourites extends Component {

  state = {
    idDeleted: null,
  }

  componentDidMount() {
    const { getAllFavourite } = this.props;
    getAllFavourite();
  }

  justDeletedFromFav = (id) => {
    const { deleteFromFavourite } = this.props;
    this.setState({
      idDeleted: id
    });
    setTimeout(() => {deleteFromFavourite(id)}, 1000);
  }

  renderRecipeBox = () => {
    const { favouriteRecipes, viewClickedViewMore } = this.props;
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
    const { favouriteRecipes } = this.props;
    return (
      <div className='ViewListFavourites'>
        { favouriteRecipes.length !== 0 &&
          <div className='recipesBoxes'>{this.renderRecipeBox()}</div>
        }
        { favouriteRecipes.length === 0 &&
          <div className='recipesBoxes'>You did not add any favourite recipe yet!</div>
        }
      </div>
    );
  }

}

ViewListFavourites.propTypes = {
  favouriteRecipes: PropTypes.array.isRequired,
  deleteFromFavourite: PropTypes.func.isRequired,
  viewMoreRecipe: PropTypes.func.isRequired,
  getAllFavourite: PropTypes.func.isRequired,
};

export default ViewListFavourites;
