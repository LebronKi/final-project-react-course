import React, { useCallback, useEffect, useState } from 'react';
import cl from  './header.module.css'
import logo from '../../images/gitlogo.png'
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getRepositoriesBySearchQuery } from '../../redux/searchRepositoriesReducer/thunk';

const Header = React.memo(function Header() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const firstPage = 1;
    const searchQuery = useSelector((state) => state.searchRepositories.searchValue);
    const location = useLocation().pathname;
    useEffect(() => {
        if (location === '/search') {
            setSearchValue(searchQuery);
        }
    }, [searchQuery, location]);

    const handleChange = useCallback((e) => {
        setSearchValue(e.target.value);
    }, []);

    const handleSearch = useCallback(() => {
        dispatch(getRepositoriesBySearchQuery(searchValue, firstPage));
    }, [dispatch,searchValue,firstPage]);

    return (
        <header>
            <Link to="/">
                <img
                    className={cl.logo}
                    src={logo}
                    alt='logo'/>
            </Link>
            <InputGroup className="search mt-3 mb-2">
                <Form.Control
                    type="text"
                    className="search__input"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleChange}/>
                <Link to={`/search?query=${searchValue}&page=${firstPage}`}>
                    <Button
                        style={{color:'#fff',fontWeight:700,marginLeft: 10}}
                        className='btn-search'
                        onClick={handleSearch}>
                        Search
                    </Button>
                </Link>
            </InputGroup>
        </header>
    );
});

export default Header;

