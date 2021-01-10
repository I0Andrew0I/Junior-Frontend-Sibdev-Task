export const search = (history) => (searchQuery, maxResultsCount, sortBy) => {
  const maxResultsArg = maxResultsCount ? `/${maxResultsCount}` : "";
  const sortByArg = sortBy ? `/${sortBy}` : "";
  history.push(`/search/${searchQuery}${maxResultsArg}${sortByArg}`);
};

export const redirect = (history) => (path) => {
  history.push(`/${path}`);
};

export const viewCountToString = (count) => {
  if (Math.floor(count / 1000000) > 0)
    return `${Math.floor(count / 1000000)} млн. просмотров`;
  if (Math.floor(count / 1000) > 0)
    return `${Math.floor(count / 1000)} тыс. просмотров`;
  return `${count} просмотров`;
};
