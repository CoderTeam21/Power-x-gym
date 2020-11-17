import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Payment from '../Payment/Payment';
import MemberHeader from './MemberHeader';
import "./MemberShifFrom.css";


const Contact = () => {

    const history = useHistory();
    const [registerData, setRegisterData] = useState();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://vast-ocean-70497.herokuapp.com/shipmentInfoAdd', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('data aded')
                history.push("/Payment");
            })
           
    }


    return (
        <div>
            <MemberHeader></MemberHeader>
            <div className="col-md-10 contact pb-5 mb-5">
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">

                        <div className="row d-flex">
                            <div>
                                <label>First Name</label><br />
                                <input className="form-control" type="text" name="firstName" ref={register} required/>
                                {errors.firstName && <p>{errors.firstName.message}</p>}
                            </div>

                            <div>
                                <label>Last Name</label><br />
                                <input className="form-control" type="text" name="lastName" ref={register} required/>
                                {errors.lastName && <p>{errors.lastName.message}</p>}
                            </div>

                        </div>

                        <div className="row d-flex">
                            <div>
                                <label>Email</label><br />
                                <input className="form-control" type="text" name="email" ref={register} required/>
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>

                            <div>
                                <label>Mobile Number</label><br />
                                <input className="form-control" type="number" name="number" ref={register} required/>
                            </div>

                        </div>

                        <div className="row d-flex">
                            <div>
                                <label>Date of Birth</label><br />
                                <input className="form-control" type="date" name="date" ref={register} required/>
                            </div>

                            <div style={{ marginLeft: "10px" }}>
                                <label>Gender</label><br />
                                <select name="gender" ref={register}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="other">other</option>
                                </select>
                            </div>

                        </div>

                        <div className="row d-flex">
                            <div>
                                <label>Address</label><br />
                                <input className="form-control" type="text" name="address" ref={register} required/>
                            </div>

                            <div>
                                <label>Country/Region</label><br />
                                <input className="form-control" type="text" name="Country" ref={register} required/>
                            </div>
                        </div>


                        <div className="row d-flex">
                            <div>
                                <label>City</label><br />
                                <input className="form-control" type="text" name="City" ref={register} required/>
                            </div>

                            <div>
                                <label>PostCode</label><br />
                                <input className="form-control" type="number" name="postCode" ref={register} required/>
                            </div>
                        </div>

                        <input className="test px-4 mt-3" type="submit" value="NEXT" />
                        {/* <Link to="/payment">
                            <input className="test px-4 mt-3" type="submit" value="NEXT" />
                        </Link> */}

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;