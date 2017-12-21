import actionTypes from "./actionTypes";

let url = 'http://localhost:4000';

export const addAnIngredient = ingredient => {
  return {
    type: actionTypes.ADD_AN_INGREDIENT,
    payload: {
      ingredient: ingredient
    }
  }
};

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

export const addToFavouriteRecipes = recipe => {
  return {
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
  }
};

export const deleteFromFavouriteRecipes = recipe => {
  return {
    url: `${url}/delete`,
    options: {
      method: 'POST',
      data: {deleted_favourite: recipe.id},
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.DELETE_FROM_FAVOURITE,
      onError: actionTypes.ON_ERROR,
    }
  }
}
