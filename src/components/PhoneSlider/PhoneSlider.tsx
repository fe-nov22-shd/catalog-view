import React from 'react';
import { ReactNode, useState } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import './PhoneSlider.scss';

type Props = {
  children: ReactNode;
};

function Arrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export const PhoneSlider: React.FC<Props> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesAmount = React.Children.count(children);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <Arrow
        onClick={() => setCurrentSlide(currentSlide - 1)}
        className={cn("slick-arrow slick-prev", {
          "slick-disabled": currentSlide === 0,
        })}
      />
    ),
    nextArrow: (
      <Arrow
        onClick={() => setCurrentSlide(currentSlide + 1)}
        className={cn("slick-arrow slick-next", {
          "slick-disabled": currentSlide === slidesAmount,
        })}
      />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="phone-slider">
        {children}
      </Slider>
    </>
  );
};

