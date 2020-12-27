import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItemLayout = ({ image, name, channelName, viewCount, onClick }) => {
  return (
    <div className="list-item" onClick={onClick}>
      <img src={image} className="list-item__image" />
      <div className="list-item__description">
        <div className="list-item__description__name">{name}</div>
        <div className="list-item__description__info">{channelName}</div>
        <div className="list-item__description__info">{viewCount}</div>
      </div>
    </div>
  );
};

ListItemLayout.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItemLayout;
