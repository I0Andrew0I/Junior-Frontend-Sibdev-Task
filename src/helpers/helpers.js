export const search = (history) => (searchQuery, maxResultsCount, sortBy) => {
  console.log(searchQuery, maxResultsCount, sortBy);
  const maxResultsArg = maxResultsCount ? `/${maxResultsCount}` : "";
  const sortByArg = sortBy ? `/${sortBy}` : "";
  history.push(`/search/${searchQuery}${maxResultsArg}${sortByArg}`);
};

export const redirect = (history) => (path) => {
  history.push(`/${path}`);
};
