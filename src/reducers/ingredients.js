import actionTypes from "../actions/actionTypes";

const initialState = [];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_AN_INGREDIENT:
      return [...state, action.payload.ingredient];
    case actionTypes.DELETE_AN_INGREDIENT:
      return state.reduce((acc, currV, currI) => {
        if (currI !== action.payload.id) {
          acc.push(currV);
        }
        return acc;
      }, []);
    default:
      return state;
  }
};

export default ingredients;
