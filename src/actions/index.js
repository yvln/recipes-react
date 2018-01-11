import actionTypes from "./actionTypes";

let url = 'http://localhost:4000';


// MANAGE INGREDIENT: add an ingredient to the list
export const addAnIngredient = ingredient => {
  return {
    type: actionTypes.ADD_AN_INGREDIENT,
    payload: {
      ingredient: ingredient
    }
  }
};

// MANAGE INGREDIENT: delete an ingredient from the list
export const deleteAnIngredient = id => {
  return {
    type: actionTypes.DELETE_AN_INGREDIENT,
    payload: {
      id: id
    }
  }
};


// MANAGE RECIPES : view all favourites from database
export const viewFavourites = () => {
  return {
    url: `${url}/`,
    options: {
      method: 'GET',
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.GET_ALL_FAVOURITES,
      onError: actionTypes.ON_ERROR,
    }
  }
};

// MANAGE RECIPES : view all with list of ingredients
export const searchRecipes = ingredients => {
  return {
    url: `${url}/search`,
    options: {
      method: 'POST',
      data: {ingredients: ingredients},
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.SEARCH_RECIPES,
      onError: actionTypes.ON_ERROR,
    }
  }
};

// MANAGE RECIPES : view ingredients when clicked on a recipe
export const viewIngredients = recipe_id => {
  return {
    url: `${url}/getIngredients/${recipe_id}`,
    options: {
      method: 'GET',
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.GET_INGREDIENTS,
      onError: actionTypes.ON_ERROR,
    }
  }
};

        // MANAGE RECIPES : selector to select a full recipe of the store from its id
        const getFullRecipeById = (store, id) => {
          return store.recipes.recipesResult.find( e => {
            return e.recipe_id === id
          })
        };

// MANAGE RECIPES : send data of the full recipe from its id
export const viewRecipeInfo = recipe_id => {
  return (dispatch, getState) => {
    const recipe = getFullRecipeById(getState(), recipe_id);
    console.log('recipe', recipe);
    dispatch({
      type: actionTypes.GET_FULL_RECIPE_BY_ID,
      payload: {
        recipe: recipe,
      }
    })
  }
};

// MANAGE RECIPES : add data to the database of the full recipe from its id
export const addToFavouriteRecipes = recipe_id => {
  return (dispatch, getState) => {
    const recipe = getFullRecipeById(getState(), recipe_id);
    dispatch({
      url: `${url}/saveIntoDb`,
      options: {
        method: 'POST',
        data: {favourite: recipe},
      },
      types: {
        onStart: actionTypes.ON_START,
        onSuccess: actionTypes.ADD_TO_FAVOURITE,
        onError: actionTypes.ON_ERROR,
      }
    })
  }
};

// MANAGE RECIPES : delete from the database data of the full recipe from its id
export const deleteFromFavouriteRecipes = recipe_id => {
  return {
    url: `${url}/delete`,
    options: {
      method: 'POST',
      data: {deleted_favourite: recipe_id},
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.DELETE_FROM_FAVOURITE,
      onError: actionTypes.ON_ERROR,
    }
  }
}
