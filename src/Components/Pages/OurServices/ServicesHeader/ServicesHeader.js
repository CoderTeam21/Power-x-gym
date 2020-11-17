import React from 'react';
import '../../../../App.css';
import Menubar from '../../../Home/Menubar/Menubar';

const ServicesHeader = () => {
    return (
        <header className="header-bg">
            <Menubar />
            <div className="vertical-center">
                <h1 className="page-header text-white ">ADVANCE GYM</h1>
            </div>
        </header>
    );
};

export default ServicesHeader;