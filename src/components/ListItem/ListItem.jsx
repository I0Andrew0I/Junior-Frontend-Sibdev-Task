import React from "react";
import PropTypes from "prop-types";
import ListItemLayout from "./ListItemLayout";

const ListItem = ({ image, name, channelName, viewCount, videoId }) => {
  const onClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
  };
  return (
    <ListItemLayout
      image={image}
      name={name}
      channelName={channelName}
      viewCount={`${viewCount} тыс. просмотров`}
      onClick={onClick}
    />
  );
};

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default ListItem;
