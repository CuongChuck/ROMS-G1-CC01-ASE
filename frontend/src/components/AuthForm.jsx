import React from 'react';
import './AuthForm.css';
import PrimaryButton from './PrimaryButton';

const AuthForm = ({content}) => {
    return (
        <div className='AuthForm'>
            <h2>{content === 0 ? 'Đăng ký' : 'Đăng nhập'}</h2>
            <div className='field'>
                <h4>Username</h4>
                <form>
                    <input type='text' required />
                </form>
                <h4>Mật khẩu</h4>
                <form>
                    <input type='text' required />
                </form>
                <PrimaryButton content={content} />
            </div>
        </div>
    )
}

export default AuthForm