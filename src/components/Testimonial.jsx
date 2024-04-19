import React, { useState, useEffect } from 'react';
import testimonialData from '../utils/testimonial';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((index) => (index + 1) % testimonialData.length);
      }, 3000); 
      return () => clearInterval(interval);
    }, [testimonialData.length]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonialData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonialData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="text-white box-border timeline" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="flex align-middle justify-center flex-col">
                <div className="m-auto p-20">
                    <h1 className=" text-5xl">Testimonial</h1>
                </div>
                <div className="lg:w-3/5  m-auto px-4 relative group backdrop-blur-sm bg-[#ffffff0f]  rounded-xl mb-20">
                    <div className="w-4/5 m-auto flex flex-col justify-center align-middle mt-8">
                        <p className="p-3 max-md:text-sm">{testimonialData[currentIndex].text}</p>
                        <h1 className="pl-3">{testimonialData[currentIndex].name}</h1>
                        <h4 className="pl-3">{testimonialData[currentIndex].designation}</h4>
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <ArrowBackIosIcon onClick={prevSlide} size={30} />
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <ArrowForwardIosIcon onClick={nextSlide} size={30} />
                    </div>
                    <div className="flex justify-center">
                        {testimonialData.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                                <FiberManualRecordIcon sx={{ fontSize: '15px' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
