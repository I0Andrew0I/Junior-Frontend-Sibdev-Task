import React from "react";
import PropTypes from "prop-types";
import Search from "antd/lib/input/Search";
import { HeartTwoTone, HeartOutlined } from "@ant-design/icons";
import "./SearchForm.scss";

const suffix = (position, isFavorited) => {
  if (position === "top" && isFavorited) return <HeartTwoTone />;
  if (position === "top" && !isFavorited)
    return <HeartOutlined className={`search-form-${position}__field__icon`} />;
};

const SearchFormLayout = ({
  position,
  searchQuery,
  setSearchQuery,
  onSearch,
}) => {
  const isFavorited = true;
  return (
    <div className={`search-form search-form-${position}`}>
      <div className={`search-form-${position}__label`}>Поиск видео</div>
      <div className={`search-form-${position}__field`}>
        <Search
          placeholder="Что хотите посмотреть?"
          enterButton="Найти"
          size="large"
          suffix={suffix(position, isFavorited)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

SearchFormLayout.propTypes = {
  position: PropTypes.oneOf(["top", "center"]).isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default SearchFormLayout;
