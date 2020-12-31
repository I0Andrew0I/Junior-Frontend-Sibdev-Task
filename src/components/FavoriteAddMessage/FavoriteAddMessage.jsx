import React from "react";
import PropTypes from "prop-types";
import "./FavoriteAddMessage.scss";

const FavoriteAddMessage = ({ onClick }) => {
  return (
    <div className={"favorite-add-message"}>
      <div className={"favorite-add-message__label"}>
        Поиск сохранён в разделе "Избранное"
      </div>
      <div className={"favorite-add-message__button"} onClick={onClick}>
        Перейти в избранное
      </div>
    </div>
  );
};

FavoriteAddMessage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FavoriteAddMessage;
