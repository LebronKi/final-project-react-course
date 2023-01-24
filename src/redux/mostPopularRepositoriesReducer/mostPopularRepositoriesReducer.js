import {
    getPopularRepositoriesError,
    getPopularRepositoriesRequest,
    getPopularRepositoriesSuccess
} from './actions';

import { handleActions } from 'redux-actions';

const initialState = {
    isLoading: false,
    error: null,
    items: []
};

export const mostPopularRepositoriesReducer = handleActions(
    {
        [getPopularRepositoriesRequest.toString()]: (state) => {
            return { ...state, isLoading: true };
        },
        [getPopularRepositoriesSuccess.toString()]: (state, action) => {
            return { ...state, isLoading: false, items: action.payload.items };
        },
        [getPopularRepositoriesError.toString()]: (state, action) => {
            return { ...state, isLoading: false, error: action.payload };
        }
    },
    initialState
);;