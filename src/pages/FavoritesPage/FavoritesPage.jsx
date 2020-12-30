import React, { useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  return (
    <>
      <div className="favorite-page__label">Избранное</div>
      <FavoritesList />
    </>
  );
};

export default FavoritesPage;
