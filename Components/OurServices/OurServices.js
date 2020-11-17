import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import ClassesHeader from '../ClassesHeader/ClassesHeader';
import Footer from '../Home/Footer/Footer';

const OurServices = () => {

    // const handleAllData = () => {
    //     fetch('https://vast-ocean-70497.herokuapp.com/allClasesDataAdd', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(fakeData)
    //     })
    // }
    const [classesData, setClassesData] =  useState([]);

    useEffect(() => {
        fetch('https://vast-ocean-70497.herokuapp.com/allDataRecive')
        .then(res => res.json())
        .then(data => setClassesData(data))
    },[])

    return (
        <div>
            <ClassesHeader></ClassesHeader>
            <div className="container">
            <div className="row" >
                {
                    classesData.map(servic => (
                        <div className="col-md-4 col-sm-6 pt-3">
                            <div class="card mb-4" style={{ "width": "22rem" }}>
                                <div class="card-body ">
                                    <p class="card-text"><img className="img-fluild card-img" src={servic.image} alt="" /></p>
                                    <div>
                                        <Link to={`/service/${servic._id}`}><p class="btn btn-warning classesBtnStyle d-flex justify-content-center">{servic.name}<FontAwesomeIcon className="ml-5 mt-1" icon={faArrowCircleRight} /></p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default OurServices;