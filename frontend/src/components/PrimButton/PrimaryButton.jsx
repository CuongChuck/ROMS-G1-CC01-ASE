import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({content, onClick}) => {
    const size = content == 2 ? 'var(--tiny-textsize)' : 'var(--small-textsize)';
    return (
        <div className='primbutton' onClick={onClick}>
            <h4 style={{fontSize:size}}>{content === 0
                ? 'Đăng ký'
                : content === 1
                ? 'Đăng nhập'
                : content === 2
                ? 'Đăng ký'
                : 'Xác nhận đăng ký'
            }</h4>
        </div>
    )
}

export default PrimaryButton