import {
    getRepositoryStargazersRequest,
    getRepositoryStargazersSuccess,
    getRepositoryStargazersError
} from './actions';

import { handleActions } from 'redux-actions';

const initialState = {
    isLoading: false,
    stargazers: []
};

const maxNumberOfStargazers = 10;

export const repositoryStargazersReducer = handleActions(
    {
        [getRepositoryStargazersRequest.toString()]: (state) => {
            return { ...state, isLoading: true };
        },
        [getRepositoryStargazersSuccess.toString()]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                stargazers: action.payload.slice(0, maxNumberOfStargazers)
            };
        },
        [getRepositoryStargazersError.toString()]: (state, action) => {
            return { ...state, isLoading: false, error: action.payload.error };
        }
    },
    initialState
);