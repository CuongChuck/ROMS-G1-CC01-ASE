import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({content, style, onClick}) => {
    const lst = ['Đăng ký', 'Thông tin tài khoản', 'Xem lịch sử dụng phòng', 'Huỷ'];
    const size = content == 2 ? 'var(--tiny-textsize)' : 'var(--small-textsize)';

    return (
        <div className='secbutton' style={style} onClick={onClick}>
            <h4 style={{fontSize:size}}>{lst[content]}</h4>
        </div>
    )
}

export default SecondaryButton