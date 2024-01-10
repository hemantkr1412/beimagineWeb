import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Slide } from 'react-reveal';
import './Client.css';

const images = [
    "https://static.wixstatic.com/media/db9fa2_c52a14b04473405eb02e148b413b4f3a~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png",
    "https://static.wixstatic.com/media/db9fa2_977c8ba635364449bdf3251801d1ec5a~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6.png",
    "https://static.wixstatic.com/media/db9fa2_64114ab84ca3430ba49643c4b5766dfa~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png",
    "https://static.wixstatic.com/media/db9fa2_8e97a7e1fbef4f54a32d7fc4f75a6dca~mv2.png/v1/fill/w_213,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png://picsum.photos/200",
    "https://static.wixstatic.com/media/db9fa2_db6c9a85df2840d59afb8ccc0f99a63e~mv2.jpeg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-12-16%20at%202_38_58%20PM.jpeg",
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
                        <Slide key={index} left when={isVisible}>
                            <div className='image-box'>
                                <Slide key={index} left when={isVisible}>
                                    <img
                                        className='images'
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
