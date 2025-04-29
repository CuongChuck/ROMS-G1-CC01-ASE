import React, { useEffect, useState } from 'react';
import './Table.css';
import moment from 'moment';
import axios from 'axios';
import { useParams } from 'react-router';

const Table = () => {
    const [lst, setLst] = useState([]);
    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://localhost:8080/room/schedule/${id}`)
            .then((response) => {
                setLst(response.data.data);
                setBuilding(response.data.building);
                setRoom(response.data.room);
            })
            .catch(() => alert("Error occurred when retrieving schedule"))
    });

    return (
        <div className='Table'>
            <h1>LỊCH SỬ ĐĂNG KÝ PHÒNG {building + '-' + room}</h1>
            <table>
                <tr className='Heading'>
                    <th>Giảng viên</th>
                    <th>Môn học</th>
                    <th>Ngày</th>
                    <th>Tiết</th>
                </tr>
                {lst.map((record) => {
                    return (
                        <tr>
                            <td>{record.Name}</td>
                            <td>{record.Subject}</td>
                            <td>{moment(record.DateUse).utcOffset('+0700').format('DD-MM-YYYY')}</td>
                            <td>{record.Start + '-' + record.End}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default Table