import React from 'react';
import logo from '../assets/logoBK.png';
import './NavBar.css';

const NavBar = ({state}) => {
    return (
        <div className='NavBar'>
            <div className='Logo'>
                <img src={logo} width={100} alt='BK' />
                <h2>BK-ROMS</h2>
            </div>
            <div className='Tabs'>
                <div className='Tab' style={{borderBottom: state === 'home' ? "2px solid var(--color-accent)" : 'none'}}>
                    <h5>Trang chủ</h5>
                </div>
                <div className='Tab' style={{borderBottom: state === 'room' ? "2px solid var(--color-accent)" : 'none'}}>
                    <h5>Phòng</h5>
                </div>
                <div className='Tab' style={{borderBottom: state === 'account' ? "2px solid var(--color-accent)" : 'none'}}>
                    <h5>Đăng nhập</h5>
                </div>
            </div>
        </div>
    )
}

export default NavBar