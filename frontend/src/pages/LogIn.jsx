import React from 'react';
import './LogIn.css';
import AuthForm from '../components/AuthForm';
import SecondaryButton from '../components/SecondaryButton';

const LogIn = () => {
    return (
        <div className='AuthPage'>
            <AuthForm content={1} />
            <div className='NonMember'>
                <h3>Chưa có tài khoản?</h3>
                <SecondaryButton
                    content={0}
                    style={{width:'100%'}}
                />
            </div>
        </div>
    )
}

export default LogIn