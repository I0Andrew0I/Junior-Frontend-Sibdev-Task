import React from "react";
import PropTypes from "prop-types";
import "./FavoriteItem.scss";

const FavoriteItem = ({ name, onClick, onChange, onDelete }) => {
  return (
    <div className="favorite-item">
      <div className="favorite-item__label" onClick={onClick}>
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
          onClick={onDelete}
        >
          Удалить
        </div>
      </div>
    </div>
  );
};

FavoriteItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FavoriteItem;
