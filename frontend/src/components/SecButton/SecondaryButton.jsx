import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({content, style, onClick}) => {
    const lst = ['Đăng ký', 'Đăng xuất', 'Xem chi tiết', 'Huỷ đăng ký', 'Gửi lại mã', 'Xoá tài khoản'];
    const size = content == 2 ? 'var(--tiny-textsize)' : 'var(--small-textsize)';

    return (
        <div className='secbutton' style={style} onClick={onClick}>
            <h4 style={{fontSize:size}}>{lst[content]}</h4>
        </div>
    )
}

export default SecondaryButton