import React from 'react';
import '../../../App.css';
import Menubar from '../../Home/Menubar/Menubar';

const ServicesHeader = () => {
    return (
        <div className="backgrounAttach">
            <Menubar></Menubar>
            <h1 className=" text-center text-white pt-5 mt-5 font-weight-bold headerText">ADVANCE GYM</h1>
        </div>
    );
};

export default ServicesHeader;