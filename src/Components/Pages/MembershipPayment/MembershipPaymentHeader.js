import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';

const MembershipPaymentHeader = () => {
    return (
        <header className="header-bg">
        <Menubar />
        <div className="vertical-center">
            <h1 className="page-header text-white ">YOUR GYM MEMBERSHIP</h1>
        </div>
    </header>
    );
};

export default MembershipPaymentHeader;