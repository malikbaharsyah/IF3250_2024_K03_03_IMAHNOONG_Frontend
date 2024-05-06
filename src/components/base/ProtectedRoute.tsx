import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import api from '../../utils/api'

interface ProtectedRouteProps {
  children: React.ReactNode;
}

async function isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await api.head('/api/auth');
            return response.status === 200;
        } catch (error) {
            console.error('Authentication check failed', error);
            return false;
        }
    }
    return false;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isLoggedIn();
            setIsAuthenticated(authStatus);
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;