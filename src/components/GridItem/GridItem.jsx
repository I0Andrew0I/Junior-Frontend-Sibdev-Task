import React from "react";
import PropTypes from "prop-types";
import GridItemLayout from "./GridItemLayout";

const GridItem = ({ image, name, channelName, viewCount, videoId }) => {
  const onClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
  };
  return (
    <GridItemLayout
      image={image}
      name={name}
      channelName={channelName}
      viewCount={`${viewCount} тыс. просмотров`}
      onClick={onClick}
    />
  );
};

GridItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default GridItem;
