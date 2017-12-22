import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ViewListRecipes.css';

import RecipeBox from '../elements/RecipeBox';
import RedirectButton from '../buttons/RedirectButton';

class ViewListRecipes extends Component {

  state = {
    idFav: [],
    idDeleted: null,
  }

  componentDidMount() {
    const { favouriteRecipes } = this.props;
    favouriteRecipes.forEach(e => {
      this.setState({
        idFav: [...this.state.idFav, e.recipe_id]
      })
    })
  }

  componentDidUpdate(prevProps) {
    const { favouriteRecipes } = this.props;
    if (prevProps.favouriteRecipes.length !== favouriteRecipes.length) {
      favouriteRecipes.forEach(e => {
        this.setState({
          idFav: [...this.state.idFav, e.recipe_id]
        })
      })
    }
  }

  justDeletedFromFav = (id) => {
    const { deleteFromFavourite } = this.props;
    this.setState({
      idDeleted: id
    });
    deleteFromFavourite(id);
  }

  renderRecipeBox = () => {
    const { listResults, addToFavourite, viewMoreRecipe } = this.props;
    return listResults.map( (e, id) => {
      return <RecipeBox
                mode='results'
                key={id}
                addToFavourite={addToFavourite}
                justDeletedFromFav={this.justDeletedFromFav}
                idFav={[...this.state.idFav]}
                idDeleted={this.state.idDeleted}
                whichRecipe={e} />
    })
  }

  render() {
    const listResults = this.props;
    return (
      <div className='ViewListRecipes'>
        {listResults.length !== 0 &&
          <div className='recipesBoxes'>{this.renderRecipeBox()}</div>
        }
        {listResults.length === 0 &&
          <div className='recipesBoxes'>Sorry, there is no result with these ingredients!</div>
        }
      </div>
    );
  }

}

ViewListRecipes.propTypes = {
  listResults: PropTypes.array.isRequired,
  favouriteRecipes: PropTypes.array.isRequired,
  viewMoreRecipe: PropTypes.func.isRequired,
  addToFavourite: PropTypes.func.isRequired,
  deleteFromFavourite: PropTypes.func.isRequired,
};

export default ViewListRecipes;
