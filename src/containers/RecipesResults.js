import { connect } from "react-redux";
import ViewListRecipes from "../components/views/ViewListRecipes";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    listResults: state.recipes.recipesResult,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavourite: recipe => {
      dispatch(actions.addToFavouriteRecipes(recipe));
    }
  };
};

const RecipesResults = connect(mapStateToProps, mapDispatchToProps)(ViewListRecipes);

export default RecipesResults;
