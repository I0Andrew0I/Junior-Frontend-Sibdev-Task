import React from "react";
import PropTypes from "prop-types";
import FavoriteModalLayout from "./FavoriteModalLayout";
import { sortByList } from "../../constants/sortByList";

const FavoriteModal = ({
  favorites,
  id,
  setId,
  searchQueryAdd,
  saveFavorite,
  addFavorite,
}) => {
  const favorite = favorites.find((f) => f.id === id) || {};
  return (
    <FavoriteModalLayout
      favorite={favorite}
      id={id}
      setId={setId}
      searchQueryAdd={searchQueryAdd}
      saveFavorite={saveFavorite}
      addFavorite={addFavorite}
      sortByList={sortByList}
    />
  );
};

FavoriteModal.propTypes = {
  favorites: PropTypes.arrayOf({
    searchQuery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    sortBy: PropTypes.string.isRequired,
    maxResultsCount: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  searchQueryAdd: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  saveFavorite: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

FavoriteModal.defaultProps = {
  favorites: [],
  searchQueryAdd: "",
  onAdd: () => {},
};

export default FavoriteModal;
