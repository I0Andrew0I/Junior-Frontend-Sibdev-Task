import React, { useState } from "react";
import PropTypes from "prop-types";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import GridItem from "../GridItem/GridItem";
import ListItem from "../ListItem/ListItem";
import "./SearchResult.scss";

const SearchResultLayout = ({ resultItems, searchQuery, totalResults }) => {
  const [viewType, setViewType] = useState("list");
  const handleViewTypeChange = (value) => {
    setViewType(value);
  };
  return (
    <div className="search-result">
      <div className="search-result__filter-panel">
        <div className="search-result__filter-panel__message">
          <div className="search-result__filter-panel__message__text">
            {`Видео по запросу "${decodeURI(searchQuery)}"`}
          </div>
          <div className="search-result__filter-panel__message__total-results">
            {totalResults}
          </div>
        </div>
        <div className="search-result__filter-panel__view-switcher">
          <BarsOutlined
            className={
              viewType === "list"
                ? "search-result__filter-panel__view-switcher__item__selected"
                : "search-result__filter-panel__view-switcher__item"
            }
            onClick={() => handleViewTypeChange("list")}
          />
          <AppstoreOutlined
            className={
              viewType === "block"
                ? "search-result__filter-panel__view-switcher__item__selected"
                : "search-result__filter-panel__view-switcher__item"
            }
            onClick={() => handleViewTypeChange("block")}
          />
        </div>
      </div>
      <div className="search-result__results">
        {resultItems.map(
          ({ image, name, channelName, viewCount, videoId }) =>
            (viewType === "block" && (
              <GridItem
                image={image}
                name={name}
                channelName={channelName}
                viewCount={viewCount}
                videoId={videoId}
              />
            )) ||
            (viewType === "list" && (
              <ListItem
                image={image}
                name={name}
                channelName={channelName}
                viewCount={viewCount}
                videoId={videoId}
              />
            ))
        )}
      </div>
    </div>
  );
};

SearchResultLayout.propTypes = {
  resultItems: PropTypes.arrayOf({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    viewCount: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
  }).isRequired,
  searchString: PropTypes.string.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export default SearchResultLayout;
