import React from 'react';
import './RoomInfo.css';
import SecondaryButton from '../SecButton/SecondaryButton';
import PrimaryButton from '../PrimButton/PrimaryButton';
import PlaceIcon from '@mui/icons-material/Place';
import { Link, useNavigate } from 'react-router-dom';

const RoomInfo = ({state, account}) => {
    const navigate = useNavigate();
    const color = state == '0' ? 'red' : 'green';
    const room = 'B1-201';
    const fal = 'EE';
    const stateName = state == 0 ? 'Đã dùng' : 'Trống';
    const date = '01/01/2025';
    const start = 1;
    const end = 3;
    const primButton = account == true ? 4 : 2;
    const secButton = account == true ? 3 : 2;
    return (
        <div className='Room'>
            <div className='container'>
                <div className='icons'>
                    <div className='state' style={{backgroundColor:color}} />
                    <PlaceIcon style={{color:'var(--color-accent)'}} />
                </div>
                <div className='info'>
                    <h5 className='roomNum'>{room}</h5>
                    <h5 className='fal'>{fal}</h5>
                    {account == true ? (
                        <h5>Ngày: {date}, Tiết: {start} - {end}</h5>
                    ) : (
                        <h5>Trạng thái: {stateName}</h5>
                    )}
                </div>
            </div>
            <div className='buttons'>
                <PrimaryButton content={primButton} onClick={() => {
                    if (account == false) navigate('/room/register');
                    else navigate('/room/adjust')
                }
                } />
                <span />
                <Link to='/room' target='_blank' style={{textDecoration:'none'}}>
                    <SecondaryButton content={secButton} />
                </Link>
            </div>
        </div>
    )
}

export default RoomInfo