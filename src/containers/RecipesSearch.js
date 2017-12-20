import { connect } from "react-redux";
import SearchButton from "../components/buttons/SearchButton";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    listIngredient: state.ingredients,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRecipes: listIngredient => {
      dispatch(actions.searchRecipes(listIngredient));
    }
  };
};

const RecipesSearch = connect(mapStateToProps, mapDispatchToProps)(SearchButton);

export default RecipesSearch;
