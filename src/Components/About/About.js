import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./author.json')
            .then(res => res.json())
            .then(data => setUsers(data))
        
    },[])
    return (
        <div className="container">
            <h1 className="my-5 fw-bold fs-1">Our <span className="text-danger">Trainer</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                users.map(user =>
                <div className="col">
                <div className="card shadow-lg card-style">
                <img src={user.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title.first">{user.name}</h5>
                </div>
                </div>
                </div>)       
            }
            </div>
      </div>
    );
};

export default About;