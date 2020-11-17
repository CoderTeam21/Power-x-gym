import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';


const ClassesHeader = () => {
    return (
        <header className="header-bg">
            <Menubar />
            <div className="vertical-center">
                <h1 className="page-header text-white ">OUR CLASSES</h1>
            </div>
        </header>
    );
};

export default ClassesHeader;