import { fetchMostRatedRepositories } from '../../services/repositories';
import {
    getPopularRepositoriesError,
    getPopularRepositoriesRequest,
    getPopularRepositoriesSuccess
} from './actions';

export function getMostPopularRepositories() {
    return function (dispatch) {
        dispatch(getPopularRepositoriesRequest());
        fetchMostRatedRepositories()
            .then((result) => {
                dispatch(getPopularRepositoriesSuccess(result));
            })
            .catch((error) => {
                dispatch(getPopularRepositoriesError(error));
            });
    };
}