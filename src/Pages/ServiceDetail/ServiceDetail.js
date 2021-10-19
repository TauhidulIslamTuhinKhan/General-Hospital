import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [details, setDetails] = useState({})
    const {servicekey} = useParams();
    useEffect( ()=> {
        const url = `/services.JSON/${servicekey}`;        
        fetch(url)
        .then(res => res.json())
        .then(data=> console.log(data));
    }, [])
    // console.log(servicekey);
    return (
        <div>
            <h2>This details : {servicekey}</h2>
            <div>
               <h4>{details?.serviceName}</h4>
            </div>
        </div>
    );
};

export default ServiceDetail;