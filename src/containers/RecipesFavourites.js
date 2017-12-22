import { connect } from "react-redux";
import ViewListFavourites from "../components/views/ViewListFavourites";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    favouriteRecipes: state.recipes.favouriteRecipes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
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

const RecipesResults = connect(mapStateToProps, mapDispatchToProps)(ViewListFavourites);

export default RecipesResults;
