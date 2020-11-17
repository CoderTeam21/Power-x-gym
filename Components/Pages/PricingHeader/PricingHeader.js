import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';

const PricingHeader = () => {
    return (
        <header className="header-bg">
        <Menubar />
        <div className="vertical-center">
            <h1 className="page-header text-white ">PRICING PLANS</h1>
        </div>
    </header>
    );
};

export default PricingHeader;