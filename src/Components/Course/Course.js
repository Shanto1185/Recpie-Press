import React from 'react';
import './Course.css'

const Course = (props) => {
    const {img,name,insturctor,courseFee} = props.course;
    return (
        <div >
            <div className="col">
                <div className="card shadow-lg card-style">
                    <img src={img} className="card-img-top  img-fluid" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title">Course Name: {name}</h5>
                        <p className="card-text">Course Instrucotr: <span className="fw-bold">{insturctor}</span></p>
                        <p>CourseFee: <span className="fw-bold"> {courseFee}</span></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Course;