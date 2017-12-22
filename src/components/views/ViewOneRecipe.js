import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './ViewOneRecipe.css';

import SaveButton from '../buttons/SaveButton';

class ViewOneRecipe extends Component {

  componentDidMount() {
    const { getIngredients, getRecipeInfo } = this.props;
    getIngredients(this.props.id);
    getRecipeInfo(this.props.id);
  }

  renderRecipeInfo() {
    const { recipeClicked } = this.props;
    return (
      <div>
        <h1>{recipeClicked.title}</h1>
        <img src={recipeClicked.image_url} />
      </div>
    )
  }

  renderIngredients = () => {
    const { ingredientsOneRecipe } = this.props;
    return ingredientsOneRecipe.map( (e, id) => {
      return <div className='ingredientRecipe' key={id}>{e}</div>
    })
  }

  render() {
    const { addToFavourite } = this.props;
    return (
      <div className="ViewOneRecipe">
        {this.renderRecipeInfo()}
        {this.renderIngredients()}
        <SaveButton
         addToFavourite={addToFavourite}
         id={this.props.id} />
      </div>
    );
  }
}

ViewOneRecipe.propTypes = {
  ingredientsOneRecipe: PropTypes.array.isRequired,
  recipeClicked: PropTypes.array.isRequired,
  getIngredients: PropTypes.func.isRequired,
  getRecipeInfo: PropTypes.func.isRequired,
  addToFavourite: PropTypes.func.isRequired,
};

export default ViewOneRecipe;
