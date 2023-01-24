import React, { useEffect } from 'react';
import cl from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMostPopularRepositories } from '../../redux/mostPopularRepositoriesReducer/thunk';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Header from '../Header/';
import RepositoriesList from "../RepositoriesList/RepositoriesList";

const Main = React.memo(function Main() {

    const dispatch = useDispatch();
    const repos = useSelector((state) => state.mostPopularRepositories.items);
    const isLoading = useSelector((state) => state.mostPopularRepositories.isLoading);

    useEffect(() => {
        dispatch(getMostPopularRepositories());
        document.title = `GitHub Search Project`;
    }, [dispatch]);

    return (
        <div>
            {!repos ? <ErrorMessage />
                    : <>
                    <Header />
                    <div className={cl.title}>Top 10 most popular repositories</div>
                    <RepositoriesList repositories={repos} isLoading={isLoading} />
                    </>
            }
        </div>
    );
});

export default Main;

