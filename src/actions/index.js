import actionTypes from "./actionTypes";

export const addAnIngredient = ingredient => {
  return {
    type: actionTypes.ADD_AN_INGREDIENT,
    payload: {
      ingredient: ingredient
    }
  };
};

export const searchRecipes = ingredients => {
  return {
    url: 'http://localhost:4000/search',
    options: {
      method: 'POST',
      data: {ingredients: ingredients},
    },
    types: {
      onStart: actionTypes.ON_START,
      onSuccess: actionTypes.SEARCH_RECIPES,
      onError: actionTypes.ON_ERROR,
    },
  };
};

export const addToFavouriteRecipes = recipe => {
  console.log(recipe);
  return {
    type: actionTypes.ADD_TO_FAVOURITE,
    payload: {
      favourite: recipe
    }
  };
};



// let id = 0;
// 
// export const addAMemo = (text, dayCalendar) => {
//   id++;
//   let day = new Date().getDate();
//   if (day < 10) {
//     day = "0" + day;
//   }
//   const month = new Date().getMonth() + 1;
//   const year = new Date().getFullYear();
//   const fullDate = `${day}/${month}/${year}`;
//   return {
//     type: actionTypes.ADD_A_MEMO,
//     payload: {
//       id: id,
//       date: dayCalendar,
//       text: {
//         date: fullDate,
//         content: text
//       }
//     }
//   };
// };
// 
// export const deleteAMemo = id => {
//   return {
//     type: actionTypes.DELETE_A_MEMO,
//     payload: {
//       id: id
//     }
//   };
// };
