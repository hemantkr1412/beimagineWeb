/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import './ContentSlider.css';

const contentData = [
    {
        url:'https://mui.com/',
        title: 'lopus prum',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCB3o4QGN0YrlAISh6ifWcxHGjZmfS830YA&usqp=CAU',
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ut temporibus vero cumque, deleniti fuga omnis cupiditate ratione aspernatur. Accusantium facere sint vero, odit ipsum mollitia optio neque quae dolores.'
    },
    {
        url:'',
        title: 'lopus prem',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhbeonOKNoI_9cpY9-u6-l1cDH8ubgsGIAA&usqp=CAU',
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ut temporibus vero cumque, deleniti fuga omnis cupiditate ratione aspernatur. Accusantium facere sint vero, odit ipsum mollitia optio neque quae dolores.'
    },
    {
        url:'',
        title: 'lopus prum',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZbklVA2nBC_heNFz3NlEEJsKBiZDUhgL4g&usqp=CAU',
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ut temporibus vero cumque, deleniti fuga omnis cupiditate ratione aspernatur. Accusantium facere sint vero, odit ipsum mollitia optio neque quae dolores.'
    },
    {
        url:'',
        title: 'lopus prem',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk7bj3SMmjxyHIMW8Wq3XOw86dX7l2u5lJQ&usqp=CAU',
        paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ut temporibus vero cumque, deleniti fuga omnis cupiditate ratione aspernatur. Accusantium facere sint vero, odit ipsum mollitia optio neque quae dolores.'
    }
]

const ContentSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
  
    const handlePrev = () => {
      setStartIndex((prevStartIndex) =>
        prevStartIndex === 0 ? contentData.length - 3 : prevStartIndex - 1
      );
    };
  
    const handleNext = () => {
      setStartIndex((prevStartIndex) =>
        prevStartIndex + 3 >= contentData.length ? 0 : prevStartIndex + 1
      );
    };
  
    return (
    <>
      <div className="content-slider">
        <button onClick={handlePrev} className="arrow-button prev-button">
          &lt;
        </button>
        <div className="slider-container animate-content">
        {contentData.slice(startIndex, startIndex + 3).map((content, index) => (
            
          <a key={index} href={content.url} className={`content-box ${index === 1 ? 'large' : ''} `}>
            <h1 className='title'>{content.title}</h1>
            <img className='image' src={content.image} alt={`Slide ${startIndex + index + 1}`} />
            <VisibilityOutlinedIcon className="visibility-icon" />
            <p className='paragraph'>{content.paragraph}</p>
          </a>
        ))}
      </div>
        <button onClick={handleNext} className="arrow-button next-button">
          &gt;
        </button>
      </div>
      </>
    );
  };
  
  export default ContentSlider;