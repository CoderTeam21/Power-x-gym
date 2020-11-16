import React from 'react';
import aboutImg from '../../../images/about.jpg';

const AboutUs = () => {
    return (
        <section className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img src={aboutImg} alt="" className="img-fluid mt-2"/>
                </div>
                <div className="col-md-6">
                <div className="about-details mt-2 ml-4">
                <h1 className="about-heading py-5 pr-4">ABOUT US</h1>
                    <h2 className="my-4"><span className="colored-text">WE ARE HERE TO DREAM!</span><br/>OUR TEAM IS HERE TO SERVE YOU</h2>
                    <p className="small-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non autem deserunt reprehenderit quisquam vel quibusdam, laborum, aspernatur praesentium rem inventore dolores ab assumenda pariatur porro minima, quam ratione nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non autem deserunt reprehenderit quisquam vel quibusdam, laborum, aspernatur praesentium rem inventore dolores ab assumenda pariatur porro minima, quam ratione nostrum!</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;