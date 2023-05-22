import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import fagOne from "../assets/f14.jpg";
import fagTwo from "../assets/f6.jpg";
import fagThree from "../assets/f11.jpg";
import fagFour from "../assets/f1.jpg";
import fagFive from "../assets/f3.jpg";
import fagSix from "../assets/f9.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Brand = () => {
  const swiperRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false);

  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative my-24 overflow-hidden">
      <div className="font-bold font-serif md:text-4xl sm:text-3xl text-2xl text-center text-stone-600 mb-6">
        Fragrance
      </div>
      <Swiper ref={swiperRef} {...params}>
        <div className=" h-[500px] flex items-center ">
          <img src={fagOne} alt="" className="w-1/2 h-[500px]" />
          <img src={fagTwo} alt="" className="w-1/2 h-[500px]" />
        </div>
        <div className="bg-black  h-[500px] flex items-center ">
          <img src={fagThree} alt="" className="w-1/2 h-[500px]" />
          <img src={fagFour} alt="" className="w-1/2 h-[500px]" />
        </div>
        <div className="bg-black  h-[500px] flex items-center">
          <img src={fagFive} alt="" className="w-1/2 h-[500px]" />
          <img src={fagSix} alt="" className="w-1/2 h-[500px]" />
        </div>
      </Swiper>
      <div className="absolute bottom-0 w-full flex justify-center pb-4">
        <div className="swiper-pagination"></div>
      </div>
      <div
        className="absolute top-1/2 left-0 z-50 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
        onClick={goPrev}
      >
        <div className="swiper-button-prev swiper-button text-white">
          <FaChevronLeft />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-0 z-50 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
        onClick={goNext}
      >
        <div className="swiper-button-next swiper-button text-white">
          <FaChevronRight />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center mt-4">
        <Link to="shop">
          <button className="bg-[#2d8b95] py-2 px-6 text-center text-white md:text-lg text-md font-semibold rounded-full">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
