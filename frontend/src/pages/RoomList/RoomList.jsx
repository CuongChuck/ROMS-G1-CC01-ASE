import React from 'react';
import './RoomList.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Room from '../../components/RoomInfo/RoomInfo';

const RoomList = () => {
    return (
        <div className='RoomListPage'>
            <h2>TÌM PHÒNG HỌC</h2>
            <SearchBar />
            <Room state={0} account={false} />
        </div>
    )
}

export default RoomList