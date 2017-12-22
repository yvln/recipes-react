import { connect } from "react-redux";
import ViewListIngredients from "../components/views/ViewListIngredients";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    listIngredient: state.ingredients,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromListIngredient: ingredient => {
      dispatch(actions.deleteAnIngredient(ingredient));
    },
  };
};

const ListIngredients = connect(mapStateToProps, mapDispatchToProps)(ViewListIngredients);

export default ListIngredients;
