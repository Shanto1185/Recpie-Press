import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Error.css'

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-danger mt-5">404 Not Found!!!</h1>
        </div>
    );
};

export default Error;