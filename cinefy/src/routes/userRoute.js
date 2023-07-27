import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const UserPrivateRoute = () => {
    return useSelector((state) => state?.data?.isAuthenticated) ? <Outlet /> : <Navigate to='/' replace />;
}

export default UserPrivateRoute