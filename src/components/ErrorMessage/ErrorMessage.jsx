import React from 'react';
import Header from '../Header/';
import oops from '../../images/oops.png'
import {Alert} from 'react-bootstrap';

const ErrorMessage =  React.memo(function ErrorMessage () {
    return (
        <div>
            <Header/>
            <div className="position-absolute start-50 top-50 transform-translate-50">
                <img
                    className='w-50 d-flex mx-auto mb-5'
                    src={oops}
                    alt='logo'/>
                <Alert variant='info'
                       className='text-center min-w-300'>
                    Something went wrong.
                    <div>Please, try to reload your page.</div>
                </Alert>
            </div>
        </div>
    );
});

export default ErrorMessage;