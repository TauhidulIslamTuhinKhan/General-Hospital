import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [details, setDetails] = useState({})
    const {servicekey} = useParams();
    useEffect( ()=> {
        const url = `/services.JSON/${servicekey}`;        
        fetch(url)
        .then(res => res.json())
        .then(data=> setDetails(data));
    }, [])
    // console.log(servicekey);
    return (
        <div className="container">
            <h2 className="text-center"> Details : {servicekey}</h2>            
            <h4>{details?.serviceName}</h4>            
        </div>
    );
};

export default ServiceDetail;