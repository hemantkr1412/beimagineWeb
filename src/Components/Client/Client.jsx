import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Slide } from 'react-reveal';
import './Client.css';

const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
];

const Client = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerOffset = window.innerHeight * 1;

            if (scrollTop > triggerOffset) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='clients'>
                <div className='title'>
                    <Typography variant='h2'>Our Clients</Typography>
                </div>
                <div className="image-container">
                    {images.map((image, index) => (
                                <Slide key={index} delay={index * 500} left when={isVisible}>
                        <div className='image-box'>
                            <Slide >
                                <img
                                    className='image'
                                    src={image}
                                    alt={`Client ${index + 1}`}
                                />
                                </Slide>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Client;
