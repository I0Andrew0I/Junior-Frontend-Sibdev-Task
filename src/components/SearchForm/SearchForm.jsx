import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchFormLayout from "./SearchFormLayout";
import { useHistory } from "react-router-dom";
import FavoriteModal from "../FavoriteModal/FavoriteModal";
import { message } from "antd";
import { search } from "../../helpers/helpers";

const onFavorite = (searchQuery, setId) => {
  if (searchQuery !== "") {
    setId(-1);
  } else {
    message.warn("Введите запрос");
  }
};

const SearcForm = ({ position }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const [id, setId] = useState(null);
  return (
    <>
      <SearchFormLayout
        position={position}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={search(history)}
        onFavorite={() => onFavorite(searchQuery, setId)}
      />
      <FavoriteModal id={id} setId={setId} isAdd searchQueryAdd={searchQuery} />
    </>
  );
};

SearchFormLayout.propTypes = {
  position: PropTypes.oneOf(["top", "center"]).isRequired,
};

export default SearcForm;
