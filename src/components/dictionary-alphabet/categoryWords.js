import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './styles.css';

const CategoryWords = () => {
    const images = [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
      ];
  return (
    <>
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

export default CategoryWords
