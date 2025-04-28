import React, { useEffect, useState } from 'react';
import './Account.css';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import Room from '../../components/RoomInfo/RoomInfo';
import PrimaryButton from '../../components/PrimButton/PrimaryButton';
import axios from 'axios';
import useAuth from '../../content/useAuth';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [name, setName] = useState('');
    const [fal_name, setFalName] = useState('');
    const [role, setRole] = useState(0);
    axios.defaults.withCredentials = true;
    const { handleLogout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://localhost:8080/profile', {
                headers: {
                    "access-token": localStorage.getItem("token")
                }
            })
            .then((response) => {
                setName(response.data.name);
                setFalName(response.data.faculty);
                setRole(response.data.role);
            })
            .catch(() => {
                alert("An error occurred while retrieving user info");
            })
    }, [])

    return (
        <div className='AccountPage'>
            <div className='Info'>
                <div className='info'>
                    <h3 className='Firstname'>{role == 1 ? 'Giảng viên: ' : ''}{name}</h3>
                    <h3>{fal_name}</h3>
                </div>
                <div className='accountButtons'>
                    <PrimaryButton content={6} onClick={() => navigate('/profile')} />
                    <span style={{marginBottom:'10px'}} />
                    <SecondaryButton content={1} onClick={() => handleLogout()} />
                </div>
            </div>
            <h2 style={{margin:'80px 0px 50px'}}>LỊCH SỬ ĐĂNG KÝ PHÒNG</h2>
            <Room state={0} account={true} />
        </div>
    )
}

export default Account