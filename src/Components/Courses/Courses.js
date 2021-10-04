import React from 'react';
import './Courses.css';
import { useState ,useEffect} from "react";
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    
    return (
        <div>
            <h1 className="my-5 fw-bold ">Our <span className="text-danger">Premim Courses</span></h1>
            <div className="container">
                <div className=" row row-cols-1 row-cols-md-2 g-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Courses;