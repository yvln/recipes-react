import actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: [],
  recipesResult: [],
  favouriteRecipes: [],
  ingredientsOneRecipe: [],
  recipeClicked: []
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FAVOURITES:
      return {...state,
        favouriteRecipes: action.payload.data,
      };
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
    case actionTypes.GET_INGREDIENTS:
      return {...state,
        ingredientsOneRecipe: action.payload.data,
      };
    case actionTypes.GET_FULL_RECIPE_BY_ID:
      return {...state,
        recipeClicked: action.payload.recipe,
      };
    default:
      return state;
  }
};

export default recipes;
