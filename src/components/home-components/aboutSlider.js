import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './home.css'


const AboutSlider = () => {
    const images = [
        '/media/pics/demo-pic.png',

        '/media/pics/demo-pic.png',
        '/media/pics/demo-pic.png',
        '/media/pics/demo-pic.png',
        '/media/pics/demo-pic.png',
       
      ];
  return (
    <>
     <div>
         <div className="home-title padding-for-sections">
          <h2  id="about-section">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

    </div>
    <Swiper 
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={3}  // Set the number of visible slides
    loop={true}        // Enable loop
    autoplay={{ delay: 1000, disableOnInteraction: false }}  // Enable autoplay with a 2-second delay
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 1,
      slideShadows: true,
    }}
  //   pagination={{ clickable: true }}
    modules={[EffectCoverflow]}
    className="mySwiper"
  >
 {images.map((image, index) => (
      <SwiperSlide style={{backgroundRepeat:"no-repeat"}}  key={index}>
        <img style={{backgroundRepeat:"no-repeat"}} src={image} alt={`Nature ${index + 1}`} />
      </SwiperSlide>
    ))}

  </Swiper>
    </>
   
  )
}

export default AboutSlider
