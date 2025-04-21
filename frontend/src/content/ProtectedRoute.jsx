import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProtectedRoute = ({children, requiredRole}) => {
    const [lectureAuthorized, setLectureAuthorized] = useState(null);
    const [userAuthorized, setUserAuthorized] = useState(null);
    const [guest, setGuest] = useState(null);
    useEffect(() => {
        const authenticate = async () => {
            try {
                const [adminResponse, userResponse] = await Promise.all([
                    axios.get('http://localhost:8080/lecture/auth', {
                        headers: {
                            "access-token": localStorage.getItem("token")
                        }
                    }),
                    axios.get('http://localhost:8080/auth', {
                        headers: {
                            "access-token": localStorage.getItem("token")
                        }
                    })
                ]);
                if (adminResponse.data.message === "Lecture Authorized" && requiredRole == "lecture")
                    setLectureAuthorized(true);
                else setLectureAuthorized(false);
                if (userResponse.data.message === "User Authorized" && requiredRole === "user")
                    setUserAuthorized(true);
                else setUserAuthorized(false);
                if (requiredRole === "guest") {
                    setGuest(true);
                }
                else setGuest(false);
            } catch (err) {
                console.error(err);
            }
        }
        authenticate();
    }, [requiredRole]);
    
    if (lectureAuthorized || userAuthorized || guest) return children;
}

export default ProtectedRoute