import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchFormLayout from "./SearchFormLayout";
import { useHistory } from "react-router-dom";

const search = (history) => (searchQuery) => {
  history.push(`/search/${searchQuery}`);
};

const favorite = () => {
  //TODO: Added favorite modal
};

const SearcForm = ({ position }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  return (
    <SearchFormLayout
      position={position}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSearch={search(history)}
      onFavorite={favorite}
    />
  );
};

SearchFormLayout.propTypes = {
  position: PropTypes.oneOf(["top", "center"]).isRequired,
};

export default SearcForm;
