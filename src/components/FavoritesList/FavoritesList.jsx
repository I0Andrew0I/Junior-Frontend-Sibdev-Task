import React, { useState } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import FavoriteModal from "../FavoriteModal/FavoriteModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../store/actions/favorites";
import { search } from "../../helpers/helpers";
import { useHistory } from "react-router-dom";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(-1);
  const { favorites } = useSelector((favorites) => favorites);
  const history = useHistory();
  return (
    <>
      {favorites.map((favorite) => (
        <FavoriteItem
          key={favorite.id}
          name={favorite.name}
          onClick={() =>
            search(history)(
              favorite.searchQuery,
              favorite.maxResultsCount,
              favorite.sortBy
            )
          }
          onChange={() => setId(favorite.id)}
          onDelete={() => dispatch(deleteFavorite(favorite.id))}
        />
      ))}
      <FavoriteModal favorites={favorites} id={id} setId={setId} />
    </>
  );
};

export default FavoritesList;
