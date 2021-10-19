import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    
    const {servicekey} = useParams();
    const [details, setDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect( ()=> {                
        fetch('/servicedetails.json')
        .then(res => res.json())
        .then(data=> setDetails(data.hospitalService));
    }, [])

    useEffect(()=>{
       const foundService = details.find(detail=>detail.key===servicekey)
       setSingleService(foundService)
    }, [details])
    // console.log(servicekey);
    return (
        <div className="container text-center">
            <div className="card mb-5" style={{ width: '25rem',}}>
                <h5 className="card-title text-center">{singleService?.serviceName}</h5>
                <img src={singleService?.image} className="card-img-top" alt="..."/>
                <div className="card-body">                    
                    <p className="card-text">{singleService?.description}</p>                     
                </div>                
            </div>            
        </div>
    );
};

export default ServiceDetail;