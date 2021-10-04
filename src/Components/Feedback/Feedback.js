import React, { useEffect, useState } from 'react';
import './FeedBack.css'

const Feedback = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch('./customer.json')
            .then(res => res.json())
            .then(data => setCustomers(data))
        
    },[])
    return (
        <div className="container">
            <h1 className="fs-1 fw-bold my-5">Our Customers <span className="text-danger">FeedBack</span></h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            {
                customers.map(customer =>
                    <div class="col">
                        <div class="card shadow-lg">
                            <img src={customer.img} class="card-img-top img-fluid image" alt="..."/>
                        <div class="card-body">
                                <h5 class="card-title">{customer.name}</h5>
                                <p class="card-text">{customer.describe}</p>
                        </div>
                        </div>
                    </div> 
                    )
            }     
            </div>
        </div>
    );
};

export default Feedback;









/* 
<div class="col">
                <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>   */