import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    },[])
    return (

        <div>
            <div className="container">
             <h1 className="fw-bold fs-1 my-5">Course <span className="text-success">Abailable</span></h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                        services.map(service => <Service
                             key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
       </div>
    );
};

export default Services;





