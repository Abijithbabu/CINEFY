import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoute = () => {
    return useSelector((state) => state?.data?.user?.type) === "admin" ? <Outlet /> : <Navigate to='/' replace />;
}

export default AdminPrivateRoute