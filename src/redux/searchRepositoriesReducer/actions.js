import { createActions } from 'redux-actions';

export const {
    searchRepositoriesRequest,
    searchRepositoriesSuccess,
    searchRepositoriesError,
    setSearchValue
} = createActions({
    SEARCH_REPOSITORIES_REQUEST: (payload) => payload,
    SEARCH_REPOSITORIES_SUCCESS: (payload) => payload,
    SEARCH_REPOSITORIES_ERROR: (payload) => payload,
    SET_SEARCH_VALUE: (payload) => payload
});