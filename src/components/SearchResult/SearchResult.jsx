import React from "react";
import { resultItems } from "../../data/resultItems.mock";
import SearchResultLayout from "./SearchResultLayout";

const SearchResult = () => {
  return <SearchResultLayout resultItems={resultItems} />;
};

export default SearchResult;
