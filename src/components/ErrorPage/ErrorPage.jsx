import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='error-container'>
            <div className='text-center'>
                <h1 className='opps'>Oops!!!</h1>
                <p className=''>
                    <h2 className='status'>404 Error</h2>
                    <i className='status-text'>{error.statusText || error.message}</i>
                </p>
                <p className='message'>Sorry, an unexpected error has occurred</p>
                <Link to='/'><button className='custom-btn'>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;