import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import ClassesHeader from '../ClassesHeader/ClassesHeader';
import Footer from '../../Home/Footer/Footer';


const OurServices = () => {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetch('https://vast-ocean-70497.herokuapp.com/allDataRecive')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])

    return (
        <div>
            <ClassesHeader />
            <div className="container class-body">
                <div className="row" >
                    {
                        classesData.map(servic => (
                            <div className="col-md-4 col-sm-6">
                                <div className="class-card">
                                    <img className="img-fluid card-img" src={servic.image} alt="" />
                                    <div>
                                        <Link className="nav-link" to="/pricing"><p className="text-center class-card-text">{servic.name}<FontAwesomeIcon className="ml-5 mt-1" icon={faArrowCircleRight} /></p></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurServices;