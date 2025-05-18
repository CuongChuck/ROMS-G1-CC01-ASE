import React, { useEffect, useState } from 'react';
import './RoomInfo.css';
import SecondaryButton from '../SecButton/SecondaryButton';
import PrimaryButton from '../PrimButton/PrimaryButton';
import PlaceIcon from '@mui/icons-material/Place';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../content/useAuth';
import axios from 'axios';

const RoomInfo = ({building, num, faculty, add, time, id, account}) => {
    const navigate = useNavigate();
    const room = building + '-' + num;
    const primButton = account == true ? 4 : 2;
    const secButton = account == true ? 3 : 2;
    const { isAuthenticated } = useAuth();
    const [isLecture, setIsLecture] = useState(false);

    useEffect(() => {
        axios
            .get('https://localhost:8080/lecture/auth', {
                headers: {
                    "access-token": localStorage.getItem("token")
                }
            })
            .then((response) => {
                if (response.data.message == "Lecture Authorized") setIsLecture(true);
            })
            .catch(() => alert("Error in verifying user role"))
    }, [])

    return (
        <div className='Room'>
            <div className='container'>
                <div className='icons'>
                    <PlaceIcon style={{color:'var(--color-accent)'}} onClick={() => alert(add)} />
                </div>
                <div className='info'>
                    <h5 className='roomNum'>{room}</h5>
                    <h5 className='fal'>{faculty}</h5>
                    <h5>{account == true ? time : add}</h5>
                </div>
            </div>
            <div className='buttons'>
                {isAuthenticated && isLecture ? (
                    <>
                        <PrimaryButton content={primButton} onClick={() => {
                            if (account) navigate(`/room/adjust/${id}`);
                            else navigate(`/room/register/${id}`);
                        }} />
                        {account ? (<></>) : (<span />)}
                    </>
                ) : (<></>)}
                {account ? (<></>) : (
                    <SecondaryButton content={secButton} onClick={() => navigate(`/room/${id}`)} />
                )}
            </div>
        </div>
    )
}

export default RoomInfo