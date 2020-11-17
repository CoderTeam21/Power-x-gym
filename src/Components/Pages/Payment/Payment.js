import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Payment.css";
import paypal from "../../../images/paypal.png";
import amex from "../../../images/cadit.png";
import mastercard from "../../../images/master.png";
import visa from "../../../images/visa.png";
import ProcessPayment from '../StripPayment/ProcessPayment';
import MemberHeader from '../MemberShifFrom/MemberHeader';
import Footer from '../../Home/Footer/Footer';


const Payment = () => {


    const [registerData, setRegisterData] = useState();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setRegisterData(data)
        console.log(registerData);
    }




    // const handelRegister = () => {
    //     const newRegister = {...registerData};
    //     fetch('url', {
    //         method: 'POST',
    //         headers: {'content-Type': 'application/json'},
    //         body: JSON.stringify(newRegister)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }




    return (
        <div>
            <MemberHeader></MemberHeader>
            <div className="col-md-10 payment">


                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    <div className="box1">
                        <div className="row d-flex">
                            <div className="col-md-6 crd">
                                <h3>Credit Card</h3><br />
                                <p>Safe money transfer using your bank visa, Maestro Discover, American Express.</p>
                            </div>

                            <div className="col-md-6 icon">
                                <img src={amex} alt="" />
                                <img src={visa} alt="" />
                                <img src={mastercard} alt="" />
                            </div>
                        </div>




                        <div className="d-flex">
                            <ProcessPayment/>
                            {/* <ProcessPayment></ProcessPayment> */}
                        </div>

                        <div className="number" style={{ marginTop: "30px" }}>
                            <label>NAME ON CARD</label><br />
                            <input type="text" name="Name" ref={register} />
                        </div>

                    </div>



                    <div className="box2">
                        <div className="row d-flex paypal">
                            <div className="col-md-6 crd text">
                                <h3>PayPal</h3><br />
                                <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                            </div>

                            <div className="col-md-6 icon">
                                <img src={paypal} alt="" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Payment;