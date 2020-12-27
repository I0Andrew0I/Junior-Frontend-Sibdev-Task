import React, { useState } from "react";
import PropTypes from "prop-types";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import GridItem from "../GridItem/GridItem";
import ListItem from "../ListItem/ListItem";
import "./SearchResult.scss";

const SearchResultLayout = ({ resultItems }) => {
  const [filterType, setFilterType] = useState("block");
  const handleFilterTypeChange = (value) => {
    console.log(value);
    console.log(filterType);
    setFilterType(value);
  };
  return (
    <div className="search-result">
      <div className="search-result__filter-panel">
        <div className="search-result__filter-panel__message">
          <div className="search-result__filter-panel__message__text">
            Видео по запросу "чем кормить кота чем кормить кота"
          </div>
          <div className="search-result__filter-panel__message__total-results">
            7230
          </div>
        </div>
        <div className="search-result__filter-panel__view-switcher">
          <BarsOutlined
            className={
              filterType === "list"
                ? "search-result__filter-panel__view-switcher__item__selected"
                : "search-result__filter-panel__view-switcher__item"
            }
            onClick={() => handleFilterTypeChange("list")}
          />
          <AppstoreOutlined
            className={
              filterType === "block"
                ? "search-result__filter-panel__view-switcher__item__selected"
                : "search-result__filter-panel__view-switcher__item"
            }
            onClick={() => handleFilterTypeChange("block")}
          />
        </div>
      </div>
      <div className="search-result__results">
        {resultItems.map(
          ({ image, name, channelName, viewCount, videoId }) =>
            (filterType === "block" && (
              <GridItem
                image={image}
                name={name}
                channelName={channelName}
                viewCount={viewCount}
                videoId={videoId}
              />
            )) ||
            (filterType === "list" && (
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
};

export default SearchResultLayout;
