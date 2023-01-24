import { fetchRepositoryStargazers } from '../../services/repositories';
import {
    getRepositoryStargazersRequest,
    getRepositoryStargazersSuccess,
    getRepositoryStargazersError
} from './actions';

export function getRepositoryStargazers(owner, repositoryName) {
    return function (dispatch) {
        dispatch(getRepositoryStargazersRequest());
        fetchRepositoryStargazers(owner, repositoryName)
            .then((result) => {
                dispatch(getRepositoryStargazersSuccess(result));
            })
            .catch((error) => {
                dispatch(getRepositoryStargazersError(error));
            });
    };
}