import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleConfirmLogIn = (data) => {
        axios
            .post('https://localhost:8080/f2a', data)
            .then((response) => {
                if (response.data.status === "Login Success") {
                    localStorage.setItem("token", response.data.token);
                    setIsAuthenticated(true);
                    navigate(`/`);
                }
                else {
                    alert("Wrong 2FA code");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when confirming code");
            })
    };

    const handleLogout = () => {
        axios
            .get('https://localhost:8080/logout')
            .then(() => {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    };

    const handleDelete = (pass) => {
        axios
            .delete("https://localhost:8080/user/delete", {
                headers: {
                    "access-token": localStorage.getItem("token")
                },
                data: {
                    password: pass
                }
            })
            .then(() => {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, handleConfirmLogIn, handleLogout, handleDelete }}>
            {children}
        </AuthContext.Provider>
    );
};