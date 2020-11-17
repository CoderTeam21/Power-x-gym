import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';

const ContactPageHeader = () => {
    return (
        <header className="header-bg">
        <Menubar />
        <div className="vertical-center">
            <h1 className="page-header text-white ">CONTACT US</h1>
        </div>
    </header>
    );
};

export default ContactPageHeader;