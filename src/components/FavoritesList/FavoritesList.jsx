import React, { useState } from "react";
import PropTypes from "prop-types";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import FavoriteModal from "../FavoriteModal/FavoriteModal";
import { favorites } from "../../data/favorites.mock";

const FavoritesList = ({ onFavoriteChange, onFavoriteDelete }) => {
  const [id, setId] = useState(null);
  return (
    <>
      {favorites.map((favorite) => (
        <FavoriteItem
          name={favorite.name}
          searchQuery={favorite.searchQuery}
          onChange={() => setId(favorite.id)}
        />
      ))}
      <FavoriteModal favorites={favorites} id={id} setId={setId} />
    </>
  );
};

FavoritesList.propTypes = {
  // favorites: PropTypes.arrayOf({
  //   searchQuery: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   id: PropTypes.number.isRequired,
  //   sortBy: PropTypes.string.isRequired,
  //   maxResultsCount: PropTypes.number.isRequired,
  // }).isRequired,
  // onFavoriteChange: PropTypes.func.isRequired,
  // onFavoriteDelete: PropTypes.func.isRequired,
};

export default FavoritesList;
