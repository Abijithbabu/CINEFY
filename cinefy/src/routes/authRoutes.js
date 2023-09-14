import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
    return useSelector((state) => state?.data?.isAuthenticated) ? <Navigate to='/' replace /> :<Outlet /> 
}

export default AuthRoutes