import React from 'react';
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"

export function TemplatePrivado() {
    const { user } = useAuth();
   
    return user ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/" />
    );
};

