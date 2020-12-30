import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { search } from "../../helpers/helpers";
import "./FavoriteItem.scss";

const FavoriteItem = ({ name, searchQuery, onChange, onDelete }) => {
  const history = useHistory();
  return (
    <div className="favorite-item">
      <div
        className="favorite-item__label"
        onClick={() => search(history)(searchQuery)}
      >
        {name}
      </div>
      <div className="favorite-item__buttons">
        <div
          className="favorite-item__buttons__button-change"
          onClick={onChange}
        >
          Изменить
        </div>
        <div
          className="favorite-item__buttons__button-delete"
          onClick={() => onDelete()}
        >
          Удалить
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
