import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
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
    );
};

export default Home;