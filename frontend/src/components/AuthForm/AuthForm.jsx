import React from 'react';
import './AuthForm.css';
import PrimaryButton from '../PrimButton/PrimaryButton';

const AuthForm = ({content}) => {
    return (
        <div className='AuthForm'>
            <h2>{content == 0 ? 'Đăng ký' : 'Đăng nhập'}</h2>
            <div className='field'>
                <h4>Username</h4>
                <form>
                    <input type='text' required />
                </form>
                {content == 0 ? (
                    <>
                        <h4>Họ tên</h4>
                        <form>
                            <input type='text' required />
                        </form>
                        <h4>Khoa/Trung tâm</h4>
                        <form>
                            <select>
                                <option value="Đào tạo bảo dưỡng công nghiệp">Đào tạo bảo dưỡng công nghiệp</option>
                                <option value="Cơ khí">Cơ khí</option>
                                <option value="KT địa chất và dầu khí">KT địa chất và dầu khí</option>
                                <option value="Điện - Điện tử">Điện - Điện tử</option>
                                <option value="KT giao thông">KT giao thông</option>
                                <option value="KT hoá học">KT hoá học</option>
                                <option value="Môi trường và tài nguyên">Môi trường & tài nguyên</option>
                                <option value="KH & KT Máy tính">KH & KT máy tính</option>
                                <option value="Quản lý công nghiệp">Quản lý công nghiệp</option>
                                <option value="KH ứng dụng">KH ứng dụng</option>
                                <option value="Công nghệ vật liệu">Công nghệ vật liệu</option>
                                <option value="KT xây dựng">KT xây dựng</option>
                            </select>
                        </form>
                        <h4>Email</h4>
                        <form>
                            <input type='email' required />
                        </form>
                        <h4>Bạn là</h4>
                        <form>
                            <select>
                                <option value="1">Giảng viên</option>
                                <option value="2">Sinh viên/Cán bộ</option>
                            </select>
                        </form>
                    </>
                ) : (<></>)}
                <h4>Mật khẩu</h4>
                <form>
                    <input type='text' required />
                </form>
                <PrimaryButton content={content} />
            </div>
        </div>
    )
}

export default AuthForm