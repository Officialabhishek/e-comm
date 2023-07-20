import React, { useState } from 'react';
import "../Slider/Slider.scss";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';


function Slider() {

  const [slide, setSlide] = useState(0);

  const images = [
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/17568714/pexels-photo-17568714/free-photo-of-subway-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (

    <div className='slider'>
      <div className='images' style={{ transform: `translateX(${slide * -100}vw)` }}>
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
      </div>
      <div className='left-arrow'>
        <div className='left' onClick={() => setSlide(slide === 0 ? 2 : (prev) => prev - 1)}><ArrowBackIosOutlinedIcon /></div>
      </div>
      <div className='right-arrow'>
        <div className='right' onClick={() => setSlide(slide === 2 ? 0 : (prev) => prev + 1)}><ArrowForwardIosOutlinedIcon /></div>
      </div>
    </div>
  );
}

export default Slider;