import React from 'react';
import Footer from '../../Home/Footer/Footer';
import ContactPageHeader from './ContactPageHeader';

const ContactUs = () => {
    return (
        <div>
            <ContactPageHeader />
            <div className="container contact-page">
                <form className="contact-form text-white">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Full Name</label>
                                <input type="name" class="form-control" id="inputPassword4" placeholder="Full Name" />
                            </div>
                        </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Message</label>
                                    <textarea type="text" class="form-control" id="inputAddress2" rows="6" placeholder="Your Message" />
                                </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputState">State</label>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputZip">Zip</label>
                                                <input type="text" class="form-control" id="inputZip" />
                                            </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Check me out
                                                        </label>
                                                </div>
                                                </div>
                                                <button type="submit" className="btn-brand">SUBMIT</button>
                                            </form>
                                        </div>
                                        <Footer />
                                    </div>
    );
};

export default ContactUs;