import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchFormLayout from "./SearchFormLayout";
import { useHistory } from "react-router-dom";
import FavoriteModal from "../FavoriteModal/FavoriteModal";
import { message } from "antd";
import { search } from "../../helpers/helpers";

const onFavorite = ({ searchQuery, setId }) => {
  if (searchQuery !== "") {
    setId(-1);
  } else {
    message.warn("Введите запрос");
  }
};

const SearcForm = ({ defaultSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState(defaultSearchQuery || "");
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();
  const [id, setId] = useState(null);
  useEffect(() => setSearchQuery(defaultSearchQuery), [defaultSearchQuery]);
  return (
    <>
      <SearchFormLayout
        position={searchQuery ? "top" : "center"}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={search(history)}
        onFavorite={() => onFavorite({ searchQuery, setId })}
        isFavorite={isFavorite}
      />
      <FavoriteModal
        id={id}
        setId={setId}
        isAdd
        searchQueryAdd={searchQuery}
        onAdd={() => setIsFavorite(true)}
      />
    </>
  );
};

SearchFormLayout.propTypes = {
  defaultSearchQuery: PropTypes.string.isRequired,
};

export default SearcForm;
