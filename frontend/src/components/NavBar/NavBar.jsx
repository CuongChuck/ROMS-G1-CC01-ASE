import React from 'react';
import logo from '../../assets/logoBK.png';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../content/useAuth';

const NavBar = ({state}) => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const { isAuthenticated } = useAuth();

    return (
        <div className='NavBar'>
            <div
                className='Logo'
                onClick={() => navigate('/')}
            >
                <img src={logo} width={100} alt='BK' />
                <h2>BK-ROMS</h2>
            </div>
            <div className='Tabs'>
                <div
                    className='Tab'
                    style={{borderBottom: state === 'home' ? "2px solid var(--color-accent)" : 'none'}}
                    onClick={() => navigate('/')}
                >
                    <h5>Trang chủ</h5>
                </div>
                <div
                    className='Tab'
                    style={{borderBottom: state === 'room' ? "2px solid var(--color-accent)" : 'none'}}
                    onClick={() => navigate('/rooms')}
                >
                    <h5>Phòng</h5>
                </div>
                <div
                    className='Tab'
                    style={{borderBottom: state === 'account' ? "2px solid var(--color-accent)" : 'none'}}
                    onClick={() => {isAuthenticated ? navigate('/account') : navigate('/login')}}
                >
                    <h5>{isAuthenticated ? 'Tài khoản' : 'Đăng nhập'}</h5>
                </div>
            </div>
        </div>
    )
}

export default NavBar