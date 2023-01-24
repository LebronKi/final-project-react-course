import { fetchRepository } from '../../services/repositories';
import { getRepositoryRequest, getRepositorySuccess, getRepositoryError } from './actions';

export function getRepository(owner, repositoryName) {
    return function (dispatch) {
        dispatch(getRepositoryRequest());
        fetchRepository(owner, repositoryName)
            .then((result) => {
                if (result.message === 'Not Found') {
                    dispatch(getRepositoryError(result.message));
                } else {
                    dispatch(getRepositorySuccess(result));
                    dispatch(getRepositoryError(null));
                }
            })
            .catch((error) => {
                dispatch(getRepositoryError(error));
            });
    };
}