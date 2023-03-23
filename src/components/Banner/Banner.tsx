import React from 'react';
import Slider from 'react-slick';

import './Banner.scss';

function Arrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

export const Banner: React.FC = () => {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      autoplay: true,
      draggable: true,
      autoplaySpeed: 3000,
      nextArrow: <Arrow className="slick-next slick-arrow" />,
      prevArrow: <Arrow className="slick-prev slick-arrow" />,
    };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className='slick-slide slide-img1'></div>
        <div className='slick-slide slide-img2'></div>
        <div className='slick-slide slide-img3'></div>
        <div className='slick-slide slide-img4'></div>
      </Slider>
    </div>
  );
}
