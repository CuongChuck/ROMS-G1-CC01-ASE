import React from 'react';
import './Table.css';

const Table = ({title}) => {
    const room = 'B1-202';

    return (
        <div className='Table'>
            <h1>{title === 0 ? 'LỊCH SỬ ĐĂNG KÝ PHÒNG' : `LỊCH SỬ DỤNG PHÒNG ${room}`}</h1>
            <table>
                <tr className='Heading'>
                    <th>{title === 0 ? 'Phòng' : 'Giảng viên'}</th>
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
    )
}

export default Table