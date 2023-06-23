import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const location = useLocation()
 
    if (user.role==='seller') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default AdminRoute;