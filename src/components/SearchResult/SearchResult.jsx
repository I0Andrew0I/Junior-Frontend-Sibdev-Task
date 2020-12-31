import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchResult } from "../../store/actions/search";
import SearchResultLayout from "./SearchResultLayout";

const SearchResult = ({ searchQuery, sortBy, maxResults }) => {
  const dispatch = useDispatch();
  const { searchResult, isLoading, error } = useSelector(({ search }) => ({
    searchResult: search.searchResult,
    isLoading: search.isLoading,
    error: search.error,
  }));
  useEffect(() => {
    dispatch(loadSearchResult({ searchQuery, maxResults, sortBy }));
  }, [dispatch, searchQuery, maxResults, sortBy]);
  return (
    <>
      {isLoading && <div>Загрузка...</div>}
      {!isLoading && error && <div>{`Ошибка: ${error}`}</div>}
      {!isLoading && !error && searchResult && (
        <SearchResultLayout
          resultItems={searchResult.items}
          searchQuery={searchResult.searchQuery}
          totalResults={searchResult.totalResults}
          isLoading={isLoading}
          error={error}
        />
      )}
    </>
  );
};

export default SearchResult;
