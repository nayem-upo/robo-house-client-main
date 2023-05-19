import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className=''>

            </div>)
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default Private;