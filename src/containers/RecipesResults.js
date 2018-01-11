import { connect } from "react-redux";
import ViewListRecipes from "../components/views/ViewListRecipes";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    listResults: state.recipes.recipesResult,
    favouriteRecipes: state.recipes.favouriteRecipes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavourite: recipe => {
      dispatch(actions.addToFavouriteRecipes(recipe));
    },
    deleteFromFavourite: recipe => {
      dispatch(actions.deleteFromFavouriteRecipes(recipe));
    },
    viewMoreRecipe: recipe_id => {
      dispatch(actions.viewIngredients(recipe_id));
    },
    getAllFavourite: () => {
      dispatch(actions.viewFavourites());
    }
  };
};

const RecipesResults = connect(mapStateToProps, mapDispatchToProps)(ViewListRecipes);

export default RecipesResults;
