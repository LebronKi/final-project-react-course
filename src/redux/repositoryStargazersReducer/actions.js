import { createActions } from 'redux-actions';

export const {
    getRepositoryStargazersRequest,
    getRepositoryStargazersSuccess,
    getRepositoryStargazersError
} = createActions({
    GET_REPOSITORY_STARGAZERS_REQUEST: (payload) => payload,
    GET_REPOSITORY_STARGAZERS_SUCCESS: (payload) => payload,
    GET_REPOSITORY_STARGAZERS_ERROR: (payload) => payload
});