import React from 'react';
import '../../../App.css';
import Menubar from '../../Home/Menubar/Menubar';

const MemberHeader = () => {
    return (

        <header className="header-bg">
        <Menubar />
        <div className="vertical-center">
            <h1 className="page-header text-white ">YOUR GYM MEMBERSHIP</h1>
        </div>
    </header>
    );
};

export default MemberHeader;