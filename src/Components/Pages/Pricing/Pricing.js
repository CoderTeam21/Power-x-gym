import React from 'react';
import Footer from '../../Home/Footer/Footer';
import PricingHeader from '../PricingHeader/PricingHeader';

const Pricing = () => {
    return (
        <div>
            <PricingHeader />
            <div className="container">
                <div className="pricing-body mb-4">
                    <h1 className="text-center"><span className="colored-text">CHOOSE THE OFFER </span>THAT SUITS YOU</h1>
                    <p className="text-muted text-center">Lorem ipsum dolor sit consectetur adipisicing elit. Nihil quod <br /> eaque asperiores doloribus voluptatem.</p>

                    <div className="pricing-card text-white">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="advance-plan pt-4 mb-2">
                                    <h4 className="text-center colored-text mb-2">BILLED MONTHLY</h4>
                                    <h2 className="text-center mb-2">ADVANCED PLAN</h2>
                                    <h1 className="price text-center colored-text">$140</h1>
                                   <div className="price-card-feature">
                                   <ul className="ml-5">
                                        <li>&#10003; Mobile Optimized</li>
                                        <li>&#10003; Best Hosting</li>
                                        <li>&#10003; Free Custom</li>
                                        <li>&#10003; Outstanding</li>
                                        <li>&#10003; Happy Customers</li>
                                    </ul>
                                   </div>
                                   <div className="purchase-btn text-center">
                                   <button className="btn-brand my-3">PURCHASE</button>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="basic-plan pt-4 mb-2">
                                <h4 className="text-center colored-text mb-2">BILLED MONTHLY</h4>
                                    <h2 className="text-center mb-2">BASIC PLAN</h2>
                                    <h1 className="price text-center colored-text">$120</h1>
                                   <div className="price-card-feature">
                                   <ul className="ml-5">
                                        <li>&#10003; Mobile Optimized</li>
                                        <li>&#10003; Best Hosting</li>
                                        <li>&#10003; Free Custom</li>
                                        <li>&#10003; Outstanding</li>
                                        <li>&#10003; Happy Customers</li>
                                    </ul>
                                   </div>
                                   <div className="purchase-btn text-center">
                                   <button className="btn-brand my-3">PURCHASE</button>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="beginner-plan pt-4 mb-2">
                                <h4 className="text-center colored-text mb-2">BILLED MONTHLY</h4>
                                    <h2 className="text-center mb-2">BEGINNERS</h2>
                                    <h1 className="price text-center colored-text">$90</h1>
                                   <div className="price-card-feature">
                                   <ul className="ml-5">
                                        <li>&#10003; Mobile Optimized</li>
                                        <li>&#10003; Best Hosting</li>
                                        <li>&#10003; Free Custom</li>
                                        <li>&#10003; Outstanding</li>
                                        <li>&#10003; Happy Customers</li>
                                    </ul>
                                   </div>
                                   <div className="purchase-btn text-center">
                                   <button className="btn-brand my-3">PURCHASE</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;