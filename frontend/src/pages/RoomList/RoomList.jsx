import React, { useEffect, useState } from 'react';
import './RoomList.css';
import Room from '../../components/RoomInfo/RoomInfo';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const RoomList = () => {
    const [roomList, setRoomList] = useState([]);
    const [search, setSearch] = useState('');

    const getAllRooms = () => {
        axios
            .get("https://localhost:8080/room/list")
            .then((response) => {
                setRoomList(response.data.data);
            })
            .catch(() => {
                alert("Error occurred when retrieving room list");
            })
    };

    const getBuilding = () => {
        axios
            .get(`https://localhost:8080/room/building/${search}`)
            .then((response) => {
                setRoomList(response.data.data);
            })
            .catch(() => {
                alert("Error occurred when retrieving room list");
            })
    };

    const getRoomNum = () => {
        axios
            .get(`https://localhost:8080/room/num/${search}`)
            .then((response) => {
                setRoomList(response.data.data);
            })
            .catch(() => {
                alert("Error occurred when retrieving room list");
            })
    };

    const getRoom = () => {
        const [building, num] = search.split('-');
        axios
            .get(`https://localhost:8080/room/${num}/${building}`)
            .then((response) => {
                setRoomList(response.data.data);
            })
            .catch(() => {
                alert("Error occurred when retrieving room list");
            })
    };

    useEffect(() => {
        if (search == '') getAllRooms();
    }, [search]);

    return (
        <div className='RoomListPage'>
            <h2>TÌM PHÒNG HỌC</h2>
            <div className='SearchBar'>
                <form>
                    <input
                        type='text'
                        size={20}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <SearchIcon
                    style={{color:"var(--color-background)",cursor:"pointer"}}
                    onClick={() => {
                        if (search == '') getAllRooms();
                        else if (search.length > 3) getRoom();
                        else {
                            let code = search[0].charCodeAt(0);
                            if (code < 91 && code > 64) getBuilding();
                            else if (code > 48 && code < 58) getRoomNum();
                        }
                    }}
                />
            </div>
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