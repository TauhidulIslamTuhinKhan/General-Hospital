import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=> {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Welcome to Nobarun General Hospital</h2>
                            <h3>Best Care for Your Good Health</h3>
                            <p>The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Welcome to Nobarun General Hospital</h2>
                            <h3>Best Care for Your Good Health</h3>
                            <p>The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1920"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Welcome to Nobarun General Hospital</h2>
                            <h3>Best Care for Your Good Health</h3>
                            <p>The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="services">
                <div className="container">
                    <h2 className="text-center my-5">Our Services</h2>
                    <div className="row">
                        {
                            services.slice(0, 6).map(service => <Service
                            key = {service.key}
                            service = {service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
            <div className="health-tips">
                <div className="container">
                <div className="text-center my-5">
                    <h2 >Health Tips</h2>
                    <p>It’s easy to get confused when it comes to health and nutrition. Even qualified experts often seem to hold opposing opinions, which can make it difficult to figure out what you should actually be doing to optimize your health.</p>
                </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div>
                                <img className="img-fluid w-100" src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800" alt="doc-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="p-5 right-text">
                                <h4>Dr. Alisha Ayat Arony</h4>
                                <p>MBBS, MPH, MEDICINE, SURGERY</p>
                                <hr />
                                <h2>How to live a healthy lifestyle?</h2>
                                <p>It’s easy to get confused when it comes to health and nutrition. Even qualified experts often seem to hold opposing opinions, which can make it difficult to figure out what you should actually be doing to optimize your health.
                                Yet, despite all the disagreements, a number of wellness tips are well supported by research.</p>
                                <h4>FOLLOW THE INSTRUCTION</h4>
                                <ul>
                                    <li>Limit sugary drinks</li>
                                    <li>Eat nuts and seeds</li>
                                    <li>Avoid ultra-processed foods</li>
                                    <li>Don’t fear coffee</li>
                                    <li>Eat fatty fish</li>
                                    <li>Feed your gut bacteria</li>
                                    <li>Limit sugary drinks</li>
                                    <li>Eat nuts and seeds</li>
                                    <li>Avoid ultra-processed foods</li>
                                    <li>Don’t fear coffee</li>
                                    <li>Eat fatty fish</li>
                                    <li>Feed your gut bacteria</li>
                                    <li>Limit sugary drinks</li>
                                    <li>Eat nuts and seeds</li>
                                    <li>Avoid ultra-processed foods</li>
                                    <li>Don’t fear coffee</li>
                                    <li>Eat fatty fish</li>
                                    <li>Feed your gut bacteria</li>
                                    <li>Limit sugary drinks</li>
                                    <li>Eat nuts and seeds</li>
                                    <li>Avoid ultra-processed foods</li>
                                    <li>Don’t fear coffee</li>          
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="speacialist my-5">
                <div className="container">
                    <div className="text-center my-5">
                        <h2>Meet Our SPECIALISTS</h2>
                        <p>A medical specialty is a branch of medical practice that is focused on a defined group of patients, diseases, skills, or philosophy. Examples include children, cancer, laboratory medicine, or primary care.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div>
                                <div className="img text-center bg-light">
                                    <img className="img-fluid w-100" src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="doc-img" />
                                    <h4 className="mt-2">Dr. Narina</h4>
                                    <p>Cardiologist</p>
                                   <Button  className="btn-common">MAKE APPOINTMENT </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div>
                                <div className="img text-center bg-light">
                                    <img className="img-fluid w-100" src="https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="doc-img" />
                                    <h4 className="mt-2">Dr. Narina</h4>
                                    <p>Dental Surgon</p>
                                   <Button  className="btn-common">MAKE APPOINTMENT </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div>
                                <div className="img text-center bg-light">
                                    <img className="img-fluid w-100" src="https://images.pexels.com/photos/8376226/pexels-photo-8376226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="doc-img" />
                                    <h4 className="mt-2">Dr. Narina</h4>
                                    <p>Eye Speacialist</p>
                                   <Button  className="btn-common">MAKE APPOINTMENT </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div>
                                <div className="img text-center bg-light">
                                    <img className="img-fluid w-100" src="https://images.pexels.com/photos/5452195/pexels-photo-5452195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="doc-img" />
                                    <h4 className="mt-2">Dr. Narina</h4>
                                    <p>Cosmetic Surgon</p>
                                   <Button  className="btn-common">MAKE APPOINTMENT </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;