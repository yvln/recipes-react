import { connect } from "react-redux";
import Form from "../components/elements/Form";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addToListIngredient: ingredient => {
      dispatch(actions.addAnIngredient(ingredient));
    }
  };
};

const FormSearch = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormSearch;
