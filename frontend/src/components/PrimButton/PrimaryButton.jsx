import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({content, onClick}) => {
    const size = content == 2 ? 'var(--tiny-textsize)' : 'var(--small-textsize)';
    const info = ['Đăng ký', 'Đăng nhập', 'Đăng ký', 'Xác nhận đăng ký', 'Chỉnh sửa', 'Xác nhận', 'Thông tin tài khoản'];
    return (
        <div className='primbutton' onClick={onClick}>
            <h4 style={{fontSize:size}}>{info[content]}</h4>
        </div>
    )
}

export default PrimaryButton