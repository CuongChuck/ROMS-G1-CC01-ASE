import React, { useEffect, useState } from 'react';
import './RoomEdit.css';
import PrimaryButton from '../../components/PrimButton/PrimaryButton';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const RoomEdit = () => {
    const { id } = useParams();
    const [num, setNum] = useState('');
    const [building, setBuilding] = useState('');
    const [fal, setFal] = useState('');

    const [date, setDate] = useState();
    const [start, setStart] = useState(2);
    const [end, setEnd] = useState(2);
    const [subject, setSubject] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://localhost:8080/room/register/${id}`)
            .then((response) => {
                setNum(response.data.data.RoomNum);
                setBuilding(response.data.data.BuildingName);
                setFal(response.data.data.FacultyName);
                setDate(Date(moment(response.data.data.DateUse).utcOffset('+0700').format('DD-MM-YYYY')));
                setStart(response.data.data.Start);
                setEnd(response.data.data.End);
                setSubject(response.data.data.Subject);
            })
            .catch(() => alert("Error occurred when retrieving a register"))
    }, [id]);

    const handleDeleteRegister = () => {
        axios
            .delete(`https://localhost:8080/room/register/delete/${id}`)
            .then(() => navigate('/account'))
            .catch(() => alert("Error occurred while deleting a register"))
    };

    const handleEditRegister = () => {
        if (end >= start && start > 1 && start < 13 && end > 1 && end < 13) {
            axios
                .put(`https://localhost:8080/room/register`, {
                    registerid: id,
                    date: date,
                    start: start,
                    end: end,
                    subject: subject
                })
                .then(() => navigate('/account'))
                .catch(() => alert("Error occurred while editing a register"))
        }
        else alert("End session, start session, subject must be valid");
    }

    return (
        <div className='RoomRegPage'>
            <div className='RoomTitle'>
                <h2>{building + '-' + num}</h2>
                <h3>{fal}</h3>
            </div>
            <div className='regFields'>
                <div className='regField'>
                    <h4>Ngày</h4>
                    <form>
                        <input
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </form>
                </div>
                <div className='regField'>
                    <h4>Tiết bắt đầu</h4>
                    <form>
                        <input
                            type='number'
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            required
                            min={2}
                            max={12}
                        />
                    </form>
                </div>
                <div className='regField'>
                    <h4>Tiết kết thúc</h4>
                    <form>
                        <input
                            type='number'
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            required
                            min={2}
                            max={12}
                        />
                    </form>
                </div>
                <div className='regField'>
                    <h4>Môn học</h4>
                    <form>
                        <input
                            type='text'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </form>
                </div>
            </div>
            <div className='regButtons'>
                <PrimaryButton content={5} onClick={() => handleEditRegister()} />
                <span style={{marginBottom:'20px'}} />
                <SecondaryButton content={3} onClick={() => handleDeleteRegister()} />
            </div>
        </div>
    )
}

export default RoomEdit