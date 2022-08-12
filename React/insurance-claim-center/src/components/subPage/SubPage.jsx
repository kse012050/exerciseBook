import React from 'react';
import './subPage.css'
import { Outlet } from 'react-router-dom';

const SubPage = () => {
    return (
        <div className='subPage'>
            <Outlet></Outlet>
        </div>
    );
};

export default SubPage;