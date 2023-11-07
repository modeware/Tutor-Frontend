import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const ProtectedRoute = ({ children , ...rest }) => {
    const navigate = useNavigate();
    const isAuthenticated = true;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { replace: true });
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return null;
    }

    return <div className='protected'>   
                <Sidebar/>
                <Header/>
                {children}
            </div>;
};

export default ProtectedRoute;
