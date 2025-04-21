import React, { useState } from 'react';
import './F2A.css';
import PrimaryButton from '../../components/PrimButton/PrimaryButton';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import axios from 'axios';
import useAuth from '../../content/useAuth';

const F2A = () => {
    const [code, setCode] = useState('');
    axios.defaults.withCredentials = true;
    const { handleConfirmLogIn } = useAuth();
    const handleResend = () => {
        axios
            .get('http://localhost:8080/f2a/resend')
            .then(() => {
                setCode('');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when confirming code");
            })
    }

    return (
        <div className='f2apage'>
            <div className='f2aform'>
                <h2 style={{marginBottom:'20px'}}>Xác thực 2 yếu tố</h2>
                <h4>Nhập mã đã được gửi đến email của bạn</h4>
                <h4 style={{marginBottom:'50px'}}>để hoàn thành việc đăng nhập</h4>
                <form className='code'>
                    <input className='codefield'
                        type='text'
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </form>
                <div className="codebuttons">
                    <PrimaryButton content={5} onClick={() => handleConfirmLogIn({code: code})} />
                    <span style={{marginBottom:'20px'}} />
                    <SecondaryButton content={4} onClick={handleResend} />
                </div>
            </div>
        </div>
    )
}

export default F2A