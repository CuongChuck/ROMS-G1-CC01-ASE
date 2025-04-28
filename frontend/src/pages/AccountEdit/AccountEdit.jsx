import React from 'react';
import './AccountEdit.css';
import AuthForm from '../../components/AuthForm/AuthForm';

const AccountEdit = () => {
    return (
        <div className='RegPage'>
            <AuthForm content={2} />
        </div>
    )
}

export default AccountEdit;