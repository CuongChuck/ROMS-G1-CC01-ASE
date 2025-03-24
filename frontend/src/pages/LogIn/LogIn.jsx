import React from 'react';
import './LogIn.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();

    return (
        <div className='AuthPage'>
            <AuthForm content={1} />
            <div className='NonMember'>
                <h3>Chưa có tài khoản?</h3>
                <SecondaryButton
                    content={0}
                    style={{width:'100%'}}
                    onClick={() => navigate('/register')}
                />
            </div>
        </div>
    )
}

export default LogIn