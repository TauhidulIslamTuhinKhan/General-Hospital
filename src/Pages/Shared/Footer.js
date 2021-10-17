import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>About us</h4>
                        <p>Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address.</p>
                        <span>{phone}+12345678901</span>
                        <h6>Opening Hours</h6>
                        <Table striped bordered hover>                            
                            <tbody>
                                <tr>
                                <td>Mon - Tues :</td>
                                <td>6.00 am - 10.00 pm</td>                                
                                </tr>
                                <tr>
                                <td>Wednes - Thurs :</td>
                                <td>8.00 am - 6.00pm</td>                              
                                </tr>
                               
                                <tr>
                                <td>Sun :</td>
                                <td>Closed</td>                              
                                </tr>
                                
                            </tbody>
                            </Table>
                    </div>
                    <div className="col-lg-4">
                        <h4>Our Department</h4>
                        <p>{arrow}Medecine and Health</p>
                        <p>{arrow}Dental Care and Surgery</p>
                        <p>{arrow}Eye Treatment</p>
                        <p>{arrow}Children Chare</p>
                        <p>{arrow}X-ray</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>Social Links</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;