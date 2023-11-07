import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = true; // replace this with your actual authentication check

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated]);

    return isAuthenticated ? null : <>{children}</>;
};

export default PublicRoute;