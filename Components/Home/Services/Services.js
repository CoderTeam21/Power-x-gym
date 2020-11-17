import React from 'react';
import progression from '../../../images/icon/Group 80.png'
import workout from '../../../images/icon/Group 81.png'
import nutrition from '../../../images/icon/Group 82.png'

const Services = () => {
    return (
        <section className="container">
            <div className="service-body text-white">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="progression text-center pt-5 mb-2">
                            <img className="img-fluid my-4" src={progression} alt=""/>
                            <h1>PROGRESSION</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="workout text-center pt-5 mb-2">
                        <img className="img-fluid my-4 mt-5" src={workout} alt=""/>
                            <h1 className="mt-2">WORKOUT</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="nutrition text-center pt-5 mb-2">
                        <img className="img-fluid my-4 mt-5" src={nutrition} alt=""/>
                            <h1>NUTRITION</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;