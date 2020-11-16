import React from 'react';
import Menubar from '../Menubar/Menubar';
import workOut from '../../../video/workout.mp4';

const Header = () => {
    return (
        <header className="header-bg">
            <Menubar />
            <div className="vertical-center">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="header-text">the best fitness <br /> studio in town</h1>
                            <p className="header-para mt-3">POWER<span className="colored-text font-weight-bold">X</span> is a functional fitness gym with a focus on unconventional training. We prioritize safety in our workouts while challenging you to move better and thrive. The POWERX approach is a balance of mobility, strength, conditioning, and nutrition where quality is paramount.</p>
                            <button className="btn-brand my-3">JOIN US</button>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <video className="video" controls>
                                <source src={workOut} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;