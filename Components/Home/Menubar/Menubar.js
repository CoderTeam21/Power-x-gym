import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className='container-fluid pt-2'>
            <Navbar className="pt-4" expand="lg">
                <Link to="/home"  className="logo ml-3"><h1>POWER <span className="colored-text font-weight-bold">X</span></h1></Link>
                <Navbar.Toggle className="navbar-hamburger" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="menu-link" to="/home">Home</Link>
                        <Link className="menu-link" to="/services">Services</Link>
                        <Link className="menu-link" to="/ourClassed">Our Classes</Link>
                        <Link className="menu-link" to="/aboutUs">About Us</Link>
                        <Link className="menu-link" to="/blog">Blog</Link>
                        <Link className="menu-link" to="/pricing">Pricing</Link>
                        <Link className="menu-link" to="/contact">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;