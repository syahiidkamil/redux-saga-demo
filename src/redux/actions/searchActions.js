export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

// for education purpose, we will not use these action creators
export const searchRequest = (query) => ({
  type: SEARCH_REQUEST,
  payload: query,
});

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});
