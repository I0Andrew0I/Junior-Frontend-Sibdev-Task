import React from "react";
import { resultItems } from "../../data/resultItems.mock";
import SearchResultLayout from "./SearchResultLayout";

const SearchResult = () => {
  //TODO: Поиск
  return <SearchResultLayout resultItems={resultItems} />;
};

export default SearchResult;
