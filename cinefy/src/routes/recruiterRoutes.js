import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RecruiterPrivateRoute = () => {
    return useSelector((state) => state?.data?.user?.type) === "recruiter" ? <Outlet /> : <Navigate to='/' replace />;
}

export default RecruiterPrivateRoute