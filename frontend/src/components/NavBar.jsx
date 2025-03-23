import React from 'react';
import logo from '../assets/logoBK.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='Logo'>
                <img src={logo} width={100} alt='BK' />
                <h2>BK-ROMS</h2>
            </div>
            <div className='Tabs'>
                <div className='Tab' style={{borderBottom:"2px solid var(--color-accent)"}}>
                    <h5>Trang chủ</h5>
                </div>
                <div className='Tab'>
                    <h5>Phòng</h5>
                </div>
                <div className='Tab'>
                    <h5>Đăng nhập</h5>
                </div>
            </div>
        </div>
    )
}

export default NavBar