import React from "react";
import PropTypes from "prop-types";
import "./GridItem.scss";

const GridItemLayout = ({ image, name, channelName, viewCount, onClick }) => {
  return (
    <div className="grid-item" onClick={onClick}>
      <img alt="Logo" src={image} className="grid-item__image" />
      <div className="grid-item__name">{name}</div>
      <div className="grid-item__info">{channelName}</div>
      <div className="grid-item__info">{viewCount}</div>
    </div>
  );
};

GridItemLayout.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridItemLayout;
