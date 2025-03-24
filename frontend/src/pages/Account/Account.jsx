import React from 'react';
import './Account.css';
import SecondaryButton from '../../components/SecButton/SecondaryButton';
import Table from '../../components/Table/Table';

const Account = () => {
    const lec_name = 'ABC';
    const fal_name = 'ABC';

    return (
        <div className='AccountPage'>
            <div className='Info'>
                <div className='info'>
                    <h3 className='Firstname'>Giảng viên: {lec_name}</h3>
                    <h3>Khoa: {fal_name}</h3>
                </div>
                <SecondaryButton content={1} />
            </div>
            <Table title={0} />
        </div>
    )
}

export default Account