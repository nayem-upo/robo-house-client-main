import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className=''>
                <h1 className='text-7xl'>Loading</h1>
            </div>)
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default Private;