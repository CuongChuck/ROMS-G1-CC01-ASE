import React, { useEffect, useState } from 'react';
import './AuthForm.css';
import PrimaryButton from '../PrimButton/PrimaryButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../content/useAuth';
import SecondaryButton from '../SecButton/SecondaryButton';

const AuthForm = ({content}) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [faculty, setFac] = useState("1");
    const [email, setEmail] = useState('');
    const [role, setRole] = useState("1");
    const [password, setPassword] = useState('');
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const { handleDelete } = useAuth();

    const handleRegister = () => {
        const data = {
            username, name, faculty,
            email, role, password
        };
        axios
            .post("https://localhost:8080/register", data)
            .then(() => {
                navigate('/login');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding a user");
            })
    };

    const handleLogIn = () => {
        const data = { username, password };
        axios
            .post("https://localhost:8080/login", data)
            .then(() => {
                navigate('/f2a');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when authorizing a user");
            })
    };

    const handleUpdate = () => {
        const data = { username, name, faculty, email, password,
            headers: {
                "access-token": localStorage.getItem("token")
            }
        };
        axios
            .put("https://localhost:8080/user/update", data)
            .then(() => {
                navigate('/account');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when updating a user");
            })
    };

    useEffect(() => {
        if (content == 2) {
            axios
                .get("https://localhost:8080/user/detail", {
                    headers: {
                        "access-token": localStorage.getItem("token")
                    }
                })
                .then((response) => {
                    setUsername(response.data.username);
                    setName(response.data.name);
                    setFac(response.data.faculty);
                    setEmail(response.data.email);
                    setRole(response.data.role);
                })
                .catch((err) => {
                    console.error(err);
                    alert("An error occurred when getting a user");
                })
        }
    }, [content]);

    return (
        <div className='AuthForm'>
            <h2>{content == 0 ? 'Đăng ký' : content == 1 ? 'Đăng nhập' : 'Thông tin tài khoản'}</h2>
            <div className='field'>
                <h4>Username</h4>
                <form>
                    <input
                        type='text'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>
                {content != 1 ? (
                    <>
                        <h4>Họ tên</h4>
                        <form>
                            <input
                                type='text'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </form>
                        <h4>Khoa/Trung tâm</h4>
                        <form>
                            <select value={faculty} onChange={(e) => setFac(e.target.value)}>
                                <option value="1">Đào tạo bảo dưỡng công nghiệp</option>
                                <option value="2">Cơ khí</option>
                                <option value="3">KT địa chất & dầu khí</option>
                                <option value="4">Điện - Điện tử</option>
                                <option value="5">KT giao thông</option>
                                <option value="6">KT hoá học</option>
                                <option value="7">Môi trường & tài nguyên</option>
                                <option value="8">KH & KT máy tính</option>
                                <option value="9">Quản lý công nghiệp</option>
                                <option value="10">KH ứng dụng</option>
                                <option value="11">Công nghệ vật liệu</option>
                                <option value="12">KT xây dựng</option>
                            </select>
                        </form>
                        <h4>Email</h4>
                        <form>
                            <input
                                type='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </form>
                        {content != 2 ? (
                            <div>
                                <h4>Bạn là</h4>
                                <form>
                                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="1">Giảng viên</option>
                                        <option value="2">Sinh viên/Cán bộ</option>
                                    </select>
                                </form>
                            </div>
                        ) : (<></>)}
                    </>
                ) : (<></>)}
                <h4>Mật khẩu {content == 0 ? '(ít nhất 12 ký tự)' : ''}</h4>
                <form>
                    <input
                        type='password'
                        required
                        value={password}
                        placeholder={content == 2 ? 'Nhập mật khẩu để xác nhận' : ''}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <PrimaryButton content={content == 2 ? 7 : content} onClick={() => {
                    if (content == 0) {
                        if (password.length >= 12) handleRegister();
                        else alert("Mật khẩu phải có ít nhất 12 ký tự");
                    }
                    else if (content == 1) {
                        handleLogIn();
                        navigate('/f2a');
                    }
                    else handleUpdate();
                }} />
                {content == 2 ? (
                    <>
                        <span style={{margin:'10px'}} />
                        <SecondaryButton content={5} onClick={() => handleDelete(password)} />
                    </>
                ) : (<></>)}
            </div>
        </div>
    )
}

export default AuthForm