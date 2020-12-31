import youtubeApi from "../../api/youtubeApi";

export const SET_SEARCH_SUCCESS = "SET_PLACES_SUCCESS";
export const SET_SEARCH_ERROR = "SET_PLACES_ERROR";
export const SET_SEARCH_ISLOADING = "SET_FAVORITES_ISLOADING";

export const setSearchSuccess = (placesList) => ({
  type: SET_SEARCH_SUCCESS,
  payload: placesList,
});

export const setSearchError = (error) => ({
  type: SET_SEARCH_ERROR,
  payload: error,
});

export const setIsLoading = (state) => ({
  type: SET_SEARCH_ISLOADING,
  payload: state,
});

const transformSearchResults = ({
  kind,
  pageInfo,
  items,
  searchQuery,
  maxResults,
}) => {
  if (kind && kind !== "youtube#searchListResponse")
    throw new Error("Ошибка запроса");
  const data = {
    totalResults: pageInfo.totalResults,
    items: items.map(({ id, snippet }) => ({
      image: snippet.thumbnails.medium.url,
      name: snippet.title,
      channelName: snippet.channelTitle,
      viewCount: "123", //TODO: fix
      videoId: id.videoId,
    })),
    searchQuery: searchQuery,
    countResults: maxResults,
  };
  return data;
};

export const loadSearchResult = ({ searchQuery, maxResults, sortBy }) => async (
  dispatch
) => {
  console.log(maxResults);
  dispatch(setIsLoading(true));
  try {
    const { data, status } = await youtubeApi.get(
      `search?part=snippet&q=${searchQuery}&type=video&maxResults=${
        maxResults || 12
      }${
        sortBy ? `&order=${sortBy}` : ""
      }&key=AIzaSyCWAPD5c4mAtit0Hjds-LYZNjYWw7w3EOc`
    );
    if (status === 200) {
      const searchResult = transformSearchResults({
        ...data,
        searchQuery,
        maxResults: maxResults || 12,
        sortBy,
      });
      dispatch(setSearchSuccess(searchResult));
    }
  } catch {
    dispatch(setSearchError("Ошибка загрузки"));
  } finally {
    dispatch(setIsLoading(false));
  }
};
