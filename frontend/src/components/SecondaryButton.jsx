import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({content, style, onClick}) => {
    return (
        <div className='secbutton' style={style} onClick={onClick}>
            <h4>{content === 0
                ? 'Đăng ký'
                : content === 1
                ? 'Xem lịch sử dụng phòng'
                : 'Huỷ'
            }</h4>
        </div>
    )
}

export default SecondaryButton