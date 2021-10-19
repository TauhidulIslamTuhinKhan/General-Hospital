import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=> {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="services">
                <div className="container">
                    <h2 className="text-center my-5">Our Services</h2>
                    <div className="row">
                        {
                            services.map(service => <SingleService
                            key = {service.key}
                            service = {service}
                            ></SingleService>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Services;