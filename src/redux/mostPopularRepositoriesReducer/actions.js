import { createActions } from 'redux-actions';

export const {
    getPopularRepositoriesRequest,
    getPopularRepositoriesSuccess,
    getPopularRepositoriesError
} = createActions({
    GET_POPULAR_REPOSITORIES_REQUEST: (payload) => payload,
    GET_POPULAR_REPOSITORIES_SUCCESS: (payload) => payload,
    GET_POPULAR_REPOSITORIES_ERROR: (payload) => payload
});