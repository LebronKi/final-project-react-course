import { fetchRepositoriesBySearchQuery } from '../../services/repositories';
import {
    searchRepositoriesError,
    searchRepositoriesRequest,
    searchRepositoriesSuccess,
    setSearchValue
} from './actions';

export function getRepositoriesBySearchQuery(searchQuery, page) {
    return function (dispatch) {
        dispatch(searchRepositoriesRequest());
        fetchRepositoriesBySearchQuery({ searchQuery, page })
            .then((result) => {
                dispatch(searchRepositoriesSuccess(result));
                dispatch(setSearchValue(searchQuery));
            })
            .catch((error) => {
                dispatch(searchRepositoriesError(error));
            });
    };
}