import React, { useEffect, useState } from 'react';
import './RoomRegister.css';
import PrimaryButton from '../../components/PrimButton/PrimaryButton';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RoomRegister = () => {
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
            .get(`https://localhost:8080/room/${id}`)
            .then((response) => {
                setNum(response.data.data.RoomNum);
                setBuilding(response.data.data.BuildingName);
                setFal(response.data.data.FacultyName);
            })
            .catch(() => alert("Error occurred when retrieving a room"))
    }, [id]);

    const handleRegister = () => {
        if (end >= start && start > 1 && start < 13 && end > 1 && end < 13) {
            axios
                .post(`https://localhost:8080/room/register/add/${id}`, {
                    token: localStorage.getItem("token"),
                    date: date,
                    start: start,
                    end: end,
                    subject: subject
                })
                .then(() => navigate('/account'))
                .catch(() => alert("Error occurred while registering a room"))
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
                <PrimaryButton content={3} onClick={() => handleRegister()} />
                <span style={{marginBottom:'20px'}} />
                <SecondaryButton content={3} onClick={() => navigate('/rooms')} />
            </div>
        </div>
    )
}

export default RoomRegister