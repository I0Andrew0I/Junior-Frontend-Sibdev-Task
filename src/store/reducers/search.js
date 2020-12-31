import { initialSearch } from "../../constants/initialStates";

const {
  SET_SEARCH_SUCCESS,
  SET_SEARCH_ERROR,
  SET_SEARCH_ISLOADING,
} = require("../actions/search");

const search = (searchState = initialSearch, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_SUCCESS:
      return { ...searchState, searchResult: payload };
    case SET_SEARCH_ERROR:
      return { ...searchState, error: payload };
    case SET_SEARCH_ISLOADING:
      return { ...searchState, isLoading: payload };
    default:
      return searchState;
  }
};

export default search;
