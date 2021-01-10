import { youtubeApi, apiKey } from "../../api/youtubeApi";

export const SET_SEARCH_SUCCESS = "SET_SEARCH_SUCCESS";
export const SET_SEARCH_ERROR = "SET_SEARCH_ERROR";
export const SET_SEARCH_ISLOADING = "SET_SEARCH_ISLOADING";

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
  const data = {
    totalResults: pageInfo.totalResults,
    items: items.map(({ id, snippet }) => ({
      image: snippet.thumbnails.medium.url,
      name: snippet.title,
      channelName: snippet.channelTitle,
      viewCount: "",
      videoId: id.videoId,
    })),
    searchQuery: searchQuery,
    countResults: maxResults,
  };
  return data;
};

const getVideoCountViews = async (item) => {
  try {
    const { data, status } = await youtubeApi.get(
      `videos?part=statistics&id=${item.videoId}&key=${apiKey}`
    );
    if (status === 200) {
      return {
        ...item,
        viewCount: data.items[0].statistics.viewCount,
      };
    }
  } catch {
    return { ...item, viewCount: "Ошибка загрузки" };
  }
};

const getVideosCountViews = async (transformSearchResults) => {
  const itemsWithCountView = await Promise.all(
    transformSearchResults.items.map(
      async (item) => await getVideoCountViews(item)
    )
  );
  return { ...transformSearchResults, items: itemsWithCountView };
};

export const loadSearchResult = ({ searchQuery, maxResults, sortBy }) => async (
  dispatch
) => {
  dispatch(setIsLoading(true));
  try {
    const { data, status } = await youtubeApi.get(
      `search?part=snippet&q=${searchQuery}&type=video&maxResults=${
        maxResults || 12
      }${sortBy ? `&order=${sortBy}` : ""}&key=${apiKey}`
    );
    if (status === 200) {
      const transformedSearchResults = transformSearchResults({
        ...data,
        searchQuery,
        maxResults: maxResults || 12,
        sortBy,
      });
      const searchResult = await getVideosCountViews(transformedSearchResults);
      dispatch(setSearchSuccess(searchResult));
    }
  } catch ({ response }) {
    if (response.status === 403) {
      dispatch(
        setSearchError(
          `Ошибка загрузки: ${response.data && response.data.error.message}`
        )
      );
    } else {
      dispatch(setSearchError(`Ошибка загрузки`));
    }
  } finally {
    dispatch(setIsLoading(false));
  }
};
