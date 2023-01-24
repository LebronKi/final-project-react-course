import {applyMiddleware,combineReducers,createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {mostPopularRepositoriesReducer} from './mostPopularRepositoriesReducer/mostPopularRepositoriesReducer';
import {repositoryCardReducer} from './repositoryCardReducer/repositoryCardReducer';
import {repositoryStargazersReducer} from './repositoryStargazersReducer/repositoryStargazersReducer';
import {searchRepositoriesReducer} from './searchRepositoriesReducer/searchRepositoriesReducer';

const rootReducer = combineReducers({
    mostPopularRepositories: mostPopularRepositoriesReducer,
    searchRepositories: searchRepositoriesReducer,
    repositoryCard: repositoryCardReducer,
    repositoryStargazers: repositoryStargazersReducer
});

const composeEnhancers = composeWithDevTools({
    name: 'Github Project'
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));