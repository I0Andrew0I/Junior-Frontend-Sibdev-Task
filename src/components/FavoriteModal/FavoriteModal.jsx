import React from "react";
import PropTypes from "prop-types";
import FavoriteModalLayout from "./FavoriteModalLayout";

const FavoriteModal = ({
  favorites,
  id,
  setId,
  searchQueryAdd,
  saveFavorite,
  addFavorite,
}) => {
  const favorite = favorites.find((f) => f.id === id) || {};
  const sortByList = [
    { value: "none", label: "Без сортировки" },
    { value: "any", label: "По чему-нибудь" },
  ];
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
  saveFavorite: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

FavoriteModal.defaultProps = {
  favorites: [],
};

//TODO: favorites из хранилища

export default FavoriteModal;
