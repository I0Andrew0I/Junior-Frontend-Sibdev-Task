import React from "react";
import { useParams } from "react-router-dom";
import SearcForm from "../../components/SearchForm/SearchForm";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchPage = () => {
  const { search_query } = useParams();
  return (
    <>
      <SearcForm position={search_query ? "top" : "center"} />
      {search_query && <SearchResult />}
    </>
  );
};

export default SearchPage;
