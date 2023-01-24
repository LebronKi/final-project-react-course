import * as queryString from 'query-string';
import React, { useEffect, useMemo } from 'react';
import cl from './search-querry.module.css'
import {Alert} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getRepositoriesBySearchQuery} from '../../redux/searchRepositoriesReducer/thunk';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Header from '../Header/';
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import SearchPagination from "../SearchPagination/SearchPagination";

const SearchQuery = React.memo(function SearchQuery() {
    const dispatch = useDispatch();
    const {search} = useLocation();
    const {query,page} = useMemo(() => queryString.parse(search), [search]);
    const pageNumber = Number(page);
    const repositories = useSelector((state) => state.searchRepositories.items);
    const totalCount = useSelector((state) => state.searchRepositories.totalCount);
    const isLoading = useSelector((state) => state.searchRepositories.isLoading);

    useEffect(() => {
        dispatch(getRepositoriesBySearchQuery(query,page));
        document.title = `Search : ${query}`;
    }, [query, page, dispatch]);

    return (
        <div>
            {!repositories
                ? <ErrorMessage />
                : <div>
                    <Header />
                    {totalCount === 0 && !isLoading
                        ? <Alert variant="info" className="text-center my-2">
                            {'Nothing was found for your query :'}
                            <span className="main__title--bold"  style={{fontWeight:900,color:'blue'}}> {query} </span>
                            <div>Please try again.</div>
                            </Alert>
                        : <div>
                            <div className={cl.main__title}>
                                Look what we found on your request :
                                <span className="main__title--bold"> { query }</span>
                            </div>
                            <RepositoriesList repositories={repositories} isLoading={isLoading}/>
                            {!isLoading && <SearchPagination query={query} currentPage={pageNumber}/>}
                        </div>
                    }
                </div>
            }
        </div>
    );
});

export default SearchQuery;