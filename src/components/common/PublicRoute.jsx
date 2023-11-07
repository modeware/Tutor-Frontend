import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const PublicRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = false; // replace this with your actual authentication check

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated]);

    return isAuthenticated ? null :
            ( <>
                <Header/>
                {children}
                </>);
};

export default PublicRoute;