import actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: [],
  recipesResult: [],
  favouriteRecipes: [],
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RECIPES:
    console.log('action', action);
      return {...state,
        recipesResult: action.payload.data,
      };
    case actionTypes.ADD_TO_FAVOURITE:
      console.log(action.payload.favourite);
      // axios.post('http://localhost:4000/saveIntoDb', {
      //   favourite: action.payload.favourite
      // }).then( res => {
      //   return res.data;
      // }).catch( err => {
      //   console.log(err);
      // })
    default:
      return state;
  }
};

export default recipes;