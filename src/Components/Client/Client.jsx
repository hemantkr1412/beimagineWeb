import React, { useState, useEffect } from 'react';
import { Slide } from 'react-reveal';
import './Client.css';

const Client = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
            <div className='clients'>
                <div className="image-container">
                    {
                        images.map((image, index) => (
                            <div className='image-box'>
                                <Slide left>
                                    <img
                                        className={`images ${index === currentIndex ? 'active' : ''}`}
                                        src={image}
                                        alt={`Client ${index + 1}`}
                                    />
                                </Slide>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Client;
