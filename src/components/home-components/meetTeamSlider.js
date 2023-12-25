import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './home.css';
const { Meta } = Card;

const MeetTeamSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  // Create array with 5 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div>
          <div>
         <div className="home-title padding-for-sections">
          <h2>Meet our team </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

    </div>
      <Swiper
      
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        loop={true} // Enable loop
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
             <Card
                    hoverable
                    style={{
                    width: 350,
                    borderRadius:"34px",
                    backgroundColor:"#bfbce8",
                    padding:"50px 15px"
                    }}>
                         <div className='meet-pic-class'   style={{margin:"0px auto" }}>
                            <img  src="/media/pics/demo-user.jpg" alt="" />

                        </div>
                    <div>
                        <h2>Fullname</h2>
                        <h3>Position</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex corrupti tempore dolorum? Commodi ullam libero, amet esse corporis obcaecati? Error, architecto laboriosam.</p>
                    
                    </div>
                  
                </Card>

            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetTeamSlider;
