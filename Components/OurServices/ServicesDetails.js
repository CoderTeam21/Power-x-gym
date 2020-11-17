import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Link, useParams } from 'react-router-dom';
import icon from '../../images/checkmark-square-2.png';
import OurServices from './OurServices';
import ServicesHeader from './ServicesHeader/ServicesHeader';
import Footer from '../Home/Footer/Footer';

const ServicesDetails = () => {
    const { service_id } = useParams();
    const [matchIteam, setMatchIteam] = useState([]);
    useEffect(() => {
        fetch('https://vast-ocean-70497.herokuapp.com/allDataRecive')
            .then(res => res.json())
            .then(data => {
                const matchId = data.find(data => data._id === service_id)
                setMatchIteam(matchId)
            })

    }, []);


    const ClassSchedule = [
        {
            day: "Monday",
            time: "8.00 AM - 9.00 AM",
        },
        {
            day: "Tueseday",
            time: "10.00 AM - 11.00 AM",
        },
        {
            day: "Wednesday",
            time: "7.00 AM - 8.00 AM",
        },
        {
            day: "Friday",
            time: "6.00 AM - 7.00 AM",
        },
        {
            day: "Saturday",
            time: "8.00 AM - 9 AM",
        },

    ]

    return (
        <div>
            <ServicesHeader></ServicesHeader>
            <div className="container">
            <div className="row pt-5">
                <div className="col-md-6">
                    <figure>
                        <img style={{ "height": "300px", "width": "500px" }} src={matchIteam.image} alt="img" />
                    </figure>
                    <p> {matchIteam.descreption}</p>

                    <div className="benifit pb-5">
                        <li><img className="icons" src={icon} alt="" /> Having slimmer shaplely thinghs</li>
                        <li><img className="icons" src={icon} alt="" /> Getting stronger</li>
                        <li><img className="icons" src={icon} alt="" /> Increased metabolism</li>
                        <li><img className="icons" src={icon} alt="" /> Increaded muscular endurance</li>
                        <li><img className="icons" src={icon} alt="" /> Maximum results in less time</li>
                        <li><img className="icons" src={icon} alt="" /> Firm hips and tummy</li>
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="pb-4"><span className="textColor">CLASS</span> SCHEDULE</h1>
                    <div className="row">

                        {
                            ClassSchedule.map(data => (
                                <div className="col-md-6">
                                    <div className="boxStyle">
                                        <h2>{data.day}</h2>
                                        <h5 className="textColor">{data.time}</h5>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <Link to="/order">
                        <button className="btn btn-warning float-right px-4 mb-5 joinButton">JOIN US</button>
                    </Link>
                </div>


            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;