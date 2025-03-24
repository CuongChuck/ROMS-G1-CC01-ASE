import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({content, style}) => {
    return (
        <div className='secbutton' style={style}>
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