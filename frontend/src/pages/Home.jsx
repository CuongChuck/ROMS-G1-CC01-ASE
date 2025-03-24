import React from 'react';
import room1 from '../assets/Phong1.jpg';
import room2 from '../assets/Phong2.jpg';
import './Home.css';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='Intro'>
                <div className='block'>
                    <h1>ĐĂNG KÝ PHÒNG HỌC</h1>
                    <h3>Hệ thống đăng ký phòng học dành cho giảng viên</h3>
                    <PrimaryButton content={0} onClick={() => navigate('/register')} />
                </div>
                <img src={room1} alt='Phong hoc 1' width={600} />
            </div>
            <div className='Info'>
                <img src={room2} alt='Phong hoc 2' height={350} />
                <div className='block'>
                    <h3>Sinh viên, giảng viên, cán bộ, nhân viên có thể kiểm tra</h3>
                    <h3>các thông tin liên quan đến phòng học tại trang web này</h3>
                </div>
            </div>
        </div>
    )
}

export default Home