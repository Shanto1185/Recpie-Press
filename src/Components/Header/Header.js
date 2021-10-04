import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-image">
                <Navbar></Navbar>
                <div className="title-container text-center">
                    <div className="title">
                        <h1 className="">Welcome To Recipe Press</h1>
                        <p className="text-white">We will help to become a greatest chef. We provide the best cooking course in the city. So withou do more worry <br />  lte's jump into our courses to become the greatest chef</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

