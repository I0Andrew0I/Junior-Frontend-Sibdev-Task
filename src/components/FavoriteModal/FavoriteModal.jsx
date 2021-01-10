import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FavoriteModalLayout from "./FavoriteModalLayout";
import { useHistory } from "react-router-dom";
import { sortByList } from "../../constants/sortByList";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, setFavorite } from "../../store/actions/favorites";
import { message } from "antd";
import FavoriteAddMessage from "../FavoriteAddMessage/FavoriteAddMessage";
import { redirect } from "../../helpers/helpers";

const FavoriteModal = ({ id, setId, searchQueryAdd, isAdd, callbackOnAdd }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);
  const [searchQuery, setSearchQuery] = useState("");
  const [name, setName] = useState("");
  const [maxResultsCount, setMaxResultsCount] = useState("25");
  const [sortBy, setSortBy] = useState("");

  const onChange = () =>
    dispatch(setFavorite({ searchQuery, name, maxResultsCount, sortBy, id }));
  const onAdd = () => {
    dispatch(addFavorite({ searchQuery, name, maxResultsCount, sortBy }));
    callbackOnAdd();
    message.open({
      content: (
        <FavoriteAddMessage onClick={() => redirect(history)("favorites")} />
      ),
      duration: 5,
    });
  };
  useEffect(() => {
    if (isAdd) {
      setSearchQuery(searchQueryAdd);
      setName("");
      setMaxResultsCount("25");
      setSortBy("");
    } else {
      const favorite = favorites.find((value) => value.id === Number(id)) || {};
      setSearchQuery(favorite.searchQuery || "");
      setName(favorite.name || "");
      setMaxResultsCount(favorite.maxResultsCount || 12);
      setSortBy(favorite.sortBy || "");
    }
  }, [id]);
  return (
    <FavoriteModalLayout
      fields={{
        id: { value: id, setValue: setId },
        searchQuery: { value: searchQuery, setValue: setSearchQuery },
        name: { value: name, setValue: setName },
        maxResultsCount: {
          value: maxResultsCount,
          setValue: setMaxResultsCount,
        },
        sortBy: { value: sortBy, setValue: setSortBy },
      }}
      onChange={onChange}
      onAdd={onAdd}
      isAdd={isAdd}
      sortByList={sortByList}
    />
  );
};

FavoriteModal.propTypes = {
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  searchQueryAdd: PropTypes.string,
  isAdd: PropTypes.bool.isRequired,
  callbackOnAdd: PropTypes.func,
};

FavoriteModal.defaultProps = {
  callbackOnAdd: () => {},
  isAdd: false,
};

export default FavoriteModal;
