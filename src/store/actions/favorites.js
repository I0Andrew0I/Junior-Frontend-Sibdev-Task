export const ADD_FAVORITE = "ADD_FAVORITE";
export const SET_FAVORITE = "SET_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const addFavorite = (favorite) => ({
  type: ADD_FAVORITE,
  payload: favorite,
});

export const setFavorite = (favorite) => ({
  type: SET_FAVORITE,
  payload: favorite,
});

export const deleteFavorite = (id) => ({
  type: DELETE_FAVORITE,
  payload: id,
});
