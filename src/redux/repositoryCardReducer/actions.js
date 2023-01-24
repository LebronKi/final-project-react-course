import { createActions } from 'redux-actions';

export const { getRepositoryRequest, getRepositorySuccess, getRepositoryError } = createActions({
    GET_REPOSITORY_REQUEST: (payload) => payload,
    GET_REPOSITORY_SUCCESS: (payload) => payload,
    GET_REPOSITORY_ERROR: (payload) => payload
});