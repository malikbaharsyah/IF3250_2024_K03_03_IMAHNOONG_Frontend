import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../services/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export async function isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await api.get('/api/auth');
            return response.status === 200 ? response.data : false;
        } catch (error) {
            console.error('Authentication check failed', error);
            localStorage.removeItem('token');
            return false;
        }
    }
    return false;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isLoggedIn();
            localStorage.setItem('username', authStatus.username);
            localStorage.setItem('idPlanetarium', authStatus.idPlanetarium);
            setIsAuthenticated(authStatus);
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};