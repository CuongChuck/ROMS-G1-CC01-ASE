import React from 'react';
import './Account.css';
import SecondaryButton from '../components/SecondaryButton';

const Account = () => {
    const lec_name = 'ABC';
    const fal_name = 'ABC';

    return (
        <div className='AccountPage'>
            <div className='Info'>
                <div className='info'>
                    <h3 className='Firstname'>Giảng viên: {lec_name}</h3>
                    <h3>Khoa: {fal_name}</h3>
                </div>
                <SecondaryButton content={1} />
            </div>
            <div className='History'>
                <h1>LỊCH SỬ ĐĂNG KÝ PHÒNG</h1>
                <table>
                    <tr className='Heading'>
                        <th>Phòng</th>
                        <th>Ngày</th>
                        <th>Tiết</th>
                    </tr>
                    <tr>
                        <td>B1-201</td>
                        <td>01/01/2025</td>
                        <td>2-4</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Account