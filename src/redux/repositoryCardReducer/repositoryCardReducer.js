import { getRepositoryRequest, getRepositorySuccess, getRepositoryError } from './actions';

import { handleActions } from 'redux-actions';

const initialState = {
    isLoading: false,
    error: null,
    repository: {},
    owner: {},
    message: null
};

export const repositoryCardReducer = handleActions(
    {
        [getRepositoryRequest.toString()]: (state) => {
            return { ...state, isLoading: true };
        },
        [getRepositorySuccess.toString()]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                repository: action.payload,
                owner: action.payload.owner,
                message: action.payload.message
            };
        },
        [getRepositoryError.toString()]: (state, action) => {
            return { ...state, isLoading: false, error: action.payload };
        }
    },
    initialState
);