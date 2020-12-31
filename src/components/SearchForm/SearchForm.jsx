import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchFormLayout from "./SearchFormLayout";
import { useHistory } from "react-router-dom";
import FavoriteModal from "../FavoriteModal/FavoriteModal";
import { message } from "antd";
import { search } from "../../helpers/helpers";

const onFavoriteAdd = ({ searchQuery, setId }) => {
  if (searchQuery !== "") {
    setId(0);
  } else {
    message.warn("Введите запрос");
  }
};

const SearcForm = ({ defaultSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState(defaultSearchQuery || "");
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();
  const [id, setId] = useState(-1);
  useEffect(() => setSearchQuery(defaultSearchQuery), [defaultSearchQuery]);
  return (
    <>
      <SearchFormLayout
        position={defaultSearchQuery ? "top" : "center"}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={() => search(history)(searchQuery)}
        onFavorite={() => onFavoriteAdd({ searchQuery, setId })}
        isFavorite={isFavorite}
      />
      <FavoriteModal
        id={id}
        setId={setId}
        isAdd
        searchQueryAdd={searchQuery}
        callbackOnAdd={() => setIsFavorite(true)}
      />
    </>
  );
};

SearchFormLayout.propTypes = {
  defaultSearchQuery: PropTypes.string.isRequired,
};

export default SearcForm;
