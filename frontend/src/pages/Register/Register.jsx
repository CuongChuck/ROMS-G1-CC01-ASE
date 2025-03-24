import React from 'react';
import './Register.css';
import AuthForm from '../../components/AuthForm/AuthForm';

const Register = () => {
    return (
        <div className='RegPage'>
            <AuthForm content={0} />
        </div>
    )
}

export default Register