import React from "react";
import PropTypes from "prop-types";
import Search from "antd/lib/input/Search";
import { HeartTwoTone, HeartOutlined } from "@ant-design/icons";
import "./SearchForm.scss";

const suffix = (position, onFavorite) => {
  if (position === "top")
    return (
      <HeartTwoTone
        className={`search-form-${position}__field__icon`}
        onClick={onFavorite}
      />
    );
};

const SearchFormLayout = ({
  position,
  searchQuery,
  setSearchQuery,
  onSearch,
  onFavorite,
}) => {
  return (
    <div className={`search-form search-form-${position}`}>
      <div className={`search-form-${position}__label`}>Поиск видео</div>
      <div className={`search-form-${position}__field`}>
        <Search
          placeholder="Что хотите посмотреть?"
          enterButton="Найти"
          size="large"
          suffix={suffix(position, onFavorite)}
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
