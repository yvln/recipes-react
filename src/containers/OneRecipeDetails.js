import { connect } from "react-redux";
import ViewOneRecipe from "../components/views/ViewOneRecipe";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    ingredientsOneRecipe: state.recipes.ingredientsOneRecipe,
    recipeClicked: state.recipes.recipeClicked,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavourite: recipe_id => {
      dispatch(actions.addToFavouriteRecipes(recipe_id));
    },
    getIngredients: recipe_id => {
      dispatch(actions.viewIngredients(recipe_id));
    },
    getRecipeInfo: recipe_id => {
      dispatch(actions.viewRecipeInfo(recipe_id));
    }
  };
};

const OneRecipeDetails = connect(mapStateToProps, mapDispatchToProps)(ViewOneRecipe);

export default OneRecipeDetails;
