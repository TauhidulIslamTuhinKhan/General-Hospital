import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {key, serviceName, image, description} = props.service
    return (
        <div className="col-lg-4">
            <div className="card mb-5" style={{ width: '25rem', minHeight: '30rem' }}>
                <h5 className="card-title text-center">{serviceName}</h5>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">                    
                    <p className="card-text">{description}</p>                     
                </div>
                <div className="text-center mb-3">
                    <Link to={`/servicedetail/${key}`}><Button  className="btn-common">TAKE APPOINTMENT {serviceName}</Button></Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default SingleService;