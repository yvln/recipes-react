import actionTypes from "../actions/actionTypes";

const initialState = [];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_AN_INGREDIENT:
      return [...state, action.payload.ingredient]
    default:
      return state;
  }
};

export default ingredients;