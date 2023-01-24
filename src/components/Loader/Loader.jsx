import React from 'react';
import cl from './loader.module.css';
import { Spinner } from 'react-bootstrap';

const Loader = React.memo(function Loader() {
    return (
        <div className={cl.loader}>
            <Spinner animation="border" role="status" variant='light'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </div>
    );
});
export default Loader;