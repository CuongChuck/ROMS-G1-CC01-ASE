import React from 'react';
import './RoomInfo.css';
import SecondaryButton from '../SecButton/SecondaryButton';
import PrimaryButton from '../PrimButton/PrimaryButton';
import PlaceIcon from '@mui/icons-material/Place';
import { Link, useNavigate } from 'react-router-dom';

const RoomInfo = ({state}) => {
    const navigate = useNavigate();
    const color = state == '0' ? 'red' : 'green';
    const room = 'B1-201';
    const fal = 'EE';
    const stateName = state == 0 ? 'Đã dùng' : 'Trống';
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
                    <h5>Trạng thái: {stateName}</h5>
                </div>
            </div>
            <div className='buttons'>
                <PrimaryButton content={2} onClick={() => navigate('/room/register')} />
                <span />
                <Link to='/room' target='_blank' style={{textDecoration:'none'}}>
                    <SecondaryButton content={2} />
                </Link>
            </div>
        </div>
    )
}

export default RoomInfo