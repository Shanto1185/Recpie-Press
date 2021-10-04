import React from 'react';
import './Service.css'
const Service = (props) => {
    const { img, courseName, courseInstructor, courseTaken, days, duration, ceritficate } = props.service;
    return (
        <div>
             <div className="col">
            <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card shadow-lg card-style">
                <div className="card-body">
                    <h5 className="card-title">Course Title: {courseName}</h5>
                    <p className="card-text">Course Instructor : <span className="fw-bold">{courseInstructor}</span></p>
                    <p className="card-text">Enrolled : {courseTaken} people</p>
                    <p className="card-text">Classes in a week : {days}</p>
                    <p className="card-text">Course Duratin : {duration}</p>
                        <p className="card-text">Certificate : {ceritficate}</p>
                        <button className="btn btn-success">Enroll Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;