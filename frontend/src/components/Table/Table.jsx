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
                    const dateUse = moment(record.DateUse).utcOffset('+0700').format('DD-MM-YYYY');
                    const date = moment().utcOffset('+0700').format('DD-MM-YYYY');
                    const time = new Date();
                    const style = (dateUse == date && record.Start + 5 <= time.getHours()) ? 'bold' : 'normal';
                    return (
                        <tr>
                            <td style={{fontWeight:style}}>{record.Name}</td>
                            <td style={{fontWeight:style}}>{record.Subject}</td>
                            <td style={{fontWeight:style}}>{dateUse}</td>
                            <td style={{fontWeight:style}}>{record.Start + '-' + record.End}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default Table