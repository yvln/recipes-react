import actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: [],
  recipesResult: [],
  favouriteRecipes: [],
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RECIPES:
      return {...state,
        recipesResult: action.payload.data,
      };
    case actionTypes.ADD_TO_FAVOURITE:
      return {...state,
        favouriteRecipes: [...state.favouriteRecipes, action.payload.data],
      };
    case actionTypes.DELETE_FROM_FAVOURITE:
      return {...state,
        favouriteRecipes: state.favouriteRecipes.reduce((acc, curr) => {
          if (curr.id !== action.payload.data.id) {
            acc.push(curr);
          }
          return acc;
        }, [])
      };
    default:
      return state;
  }
};

export default recipes;
