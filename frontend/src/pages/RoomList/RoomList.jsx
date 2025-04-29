import React, { useEffect, useState } from 'react';
import './RoomList.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Room from '../../components/RoomInfo/RoomInfo';
import axios from 'axios';

const RoomList = () => {
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:8080/room/list")
            .then((response) => {
                setRoomList(response.data.data);
            })
            .catch(() => {
                alert("Error occurred when retrieving room list");
            })
    }, []);

    return (
        <div className='RoomListPage'>
            <h2>TÌM PHÒNG HỌC</h2>
            <SearchBar />
            {roomList.map((room) => {
                return (
                    <Room
                        building={room.BuildingName}
                        num={room.RoomNum}
                        faculty={room.FacultyName}
                        add={room.Location}
                        id={room.RoomID}
                        account={false}
                    />
                );
            })}
        </div>
    )
}

export default RoomList