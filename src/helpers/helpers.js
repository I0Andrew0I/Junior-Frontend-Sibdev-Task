export const search = (history) => (searchQuery) => {
  history.push(`/search/${searchQuery}`);
};

export const redirect = (history) => (path) => {
  history.push(`/${path}`);
};
