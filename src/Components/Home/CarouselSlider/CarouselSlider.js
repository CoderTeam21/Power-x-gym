import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import '../../../App.css';
import img1 from '../../../images/gym-img/img1.jpg';
import img2 from '../../../images/gym-img/img2.jpg';
import img3 from '../../../images/gym-img/img3.jpg';
import img4 from '../../../images/gym-img/img4.jpg';
import img5 from '../../../images/gym-img/img5.jpg';
import img6 from '../../../images/gym-img/img6.jpg';

const CarouselSlider = () => {

    const breakPoints = [
        {
            width: 500, itemsToShow: 1
        },
        {
            width: 768, itemsToShow: 3
        },
        {
            width: 1200, itemsToShow: 3
        }
    ];

    return (
        <div className="container-fluid mt-5 pt-5">
            <Carousel breakPoints={breakPoints} className="imageHandle">
               <div className="cart">
                   <div>
                        <img src={img1} alt=""/>
                        <Link to="/classes"> <span className="sliderText">PHYSIO TRAINING</span></Link>
                   </div>
               </div>
               <div className="cart">
                   <div>
                        <img src={img4} alt=""/>
                        <Link to="/classes"><span className="sliderText">SELF DEFENSE</span></Link>
                   </div>
               </div>
               <div className="cart">
                   <div>
                        <img src={img3} alt=""/>
                        <Link to="/classes"><span className="sliderText">ADVANCE TRAINING</span></Link>
                   </div>
               </div>
               <div className="cart">
                   <div>
                        <img src={img2} alt=""/>
                        <Link to="/classes"><span className="sliderText">CARDIO TRAINING</span></Link>
                   </div>
               </div>
               <div className="cart">
                   <div>
                        <img src={img5} alt=""/>
                        <Link to="/classes"><span className="sliderText">STRENGTH TRAINING</span></Link>
                   </div>
               </div>
               <div className="cart">
                   <div>
                        <img src={img6} alt=""/>
                        <Link to="/classes"><span className="sliderText">PHYSIO TRAINING</span></Link>
                   </div>
               </div>
               
            </Carousel>
        </div>
    );
};

export default CarouselSlider;