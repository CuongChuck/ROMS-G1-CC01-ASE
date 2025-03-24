import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({content}) => {
    return (
        <div className='primbutton'>
            <h4>{content === 0
                ? 'Đăng ký'
                : content === 1
                ? 'Đăng nhập'
                : 'Xác nhận đăng ký'
            }</h4>
        </div>
    )
}

export default PrimaryButton