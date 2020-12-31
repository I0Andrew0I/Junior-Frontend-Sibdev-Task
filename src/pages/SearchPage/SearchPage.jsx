import React from "react";
import { useParams } from "react-router-dom";
import SearcForm from "../../components/SearchForm/SearchForm";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchPage = () => {
  const { searchQuery, maxResults, sortBy } = useParams();
  return (
    <>
      <SearcForm defaultSearchQuery={searchQuery} />
      {searchQuery && (
        <SearchResult
          searchQuery={searchQuery}
          maxResults={maxResults}
          sortBy={sortBy}
        />
      )}
    </>
  );
};

export default SearchPage;
