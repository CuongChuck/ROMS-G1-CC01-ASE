import React from 'react';
import './RoomRegister.css';
import PrimaryButton from '../../components/PrimButton/PrimaryButton';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const RoomRegister = () => {
    const room = 'B1-202';
    const fal = 'EE';
    const navigate = useNavigate();
    return (
        <div className='RoomRegPage'>
            <div className='RoomTitle'>
                <h2>{room}</h2>
                <h3>{fal}</h3>
            </div>
            <div className='regFields'>
                <div className='regField'>
                    <h4>Ngày</h4>
                    <form>
                        <input type='date' required />
                    </form>
                </div>
                <div className='regField'>
                    <h4>Tiết bắt đầu</h4>
                    <form>
                        <input type='number' required min={2} max={12} />
                    </form>
                </div>
                <div className='regField'>
                    <h4>Tiết kết thúc</h4>
                    <form>
                        <input type='number' required min={2} max={12} />
                    </form>
                </div>
            </div>
            <div className='regButtons'>
                <PrimaryButton content={3} onClick={() => navigate('/account')} />
                <span style={{marginBottom:'20px'}} />
                <SecondaryButton content={3} onClick={() => navigate('/rooms')} />
            </div>
        </div>
    )
}

export default RoomRegister