import {
    searchRepositoriesError,
    searchRepositoriesRequest,
    searchRepositoriesSuccess,
    setSearchValue
} from './actions';

import {handleActions} from 'redux-actions';

const initialState = {
    isLoading: false,
    error: null,
    items: [],
    perPage: 10,
    totalCount: 0,
    searchValue: ''
};

export const searchRepositoriesReducer = handleActions(
    {
        [searchRepositoriesRequest.toString()]: (state) => {
            return { ...state, isLoading: true };
        },
        [searchRepositoriesSuccess.toString()]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                items: action.payload.items,
                totalCount: action.payload['total_count']
            };
        },
        [searchRepositoriesError.toString()]: (state, action) => {
            return { ...state, isLoading: false, error: action.payload };
        },
        [setSearchValue.toString()]: (state, action) => {
            return { ...state, isLoading: false, searchValue: action.payload };
        }
    },
    initialState
);