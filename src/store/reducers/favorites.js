import { initialFavorites } from "../../constants/initialStates";

const {
  ADD_FAVORITE,
  SET_FAVORITE,
  DELETE_FAVORITE,
} = require("../actions/favorites");

const getMaxId = (favorites) => {
  return favorites.reduce(
    (accumulator, favorite) =>
      favorite.id > accumulator ? favorite.id : accumulator,
    0
  );
};

const favorites = (favoritesState = initialFavorites, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      const newId = getMaxId(favoritesState) + 1;
      return [...favoritesState, { ...payload, id: newId }];
    case SET_FAVORITE:
      return favoritesState.map((favorite) =>
        favorite.id === payload.id ? payload : favorite
      );
    case DELETE_FAVORITE:
      return favoritesState.filter((value) => value.id !== payload);
    default:
      return favoritesState;
  }
};

export default favorites;
