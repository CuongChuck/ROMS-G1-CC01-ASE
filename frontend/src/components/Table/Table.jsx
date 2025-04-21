import React from 'react';
import './Table.css';

const Table = () => {
    const room = 'B1-202';

    return (
        <div className='Table'>
            <h1>LỊCH SỬ ĐĂNG KÝ PHÒNG {room}</h1>
            <table>
                <tr className='Heading'>
                    <th>Giảng viên</th>
                    <th>Môn học</th>
                    <th>Ngày</th>
                    <th>Tiết</th>
                </tr>
                <tr>
                    <td>B1-201</td>
                    <td>DSA</td>
                    <td>01/01/2025</td>
                    <td>2-4</td>
                </tr>
            </table>
        </div>
    )
}

export default Table