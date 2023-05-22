import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../ProductStore";
import { motion } from "framer-motion";

const BestSeller = () => {
  const swiperRef = useRef(null);

  const breakpoints = {
    280: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    360: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 4,
        spaceBetween: 1,
        grabCursor: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: breakpoints,
      });
    }
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between lg:mx-20 md:mx-20 mx-10 mt-16 mb-3 whitespace-nowrap">
        <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-[15px] font-serif">
          Best Seller
        </h1>
        <Link to="shop">
          <button className="font-semibold border border-black rounded-full lg:py-3 lg:px-5 md:py-2 md:px-4 py-1 px-3 lg:text-normal md:text-sm sm:text-xs text-[10px]">
            VIEW MORE
          </button>
        </Link>
      </div>
      <div className="relative flex flex-col flex-shrink-0 h-100 overflow-hidden mb-10  mx-4 pl-4">
        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {productsArray.map((product, idx) => (
              <div className="swiper-slide relative" key={idx}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="swiper-scrollbar"></div>
          <div className="flex flex-1 flex-row items-center justify-between px-4 pb-4 cursor-pointer z-50">
            <div
              className="swiper-button-prev md:text-2xl text-xl bg-white/70 hover:bg-black/50 hover:text-white text-black p-3 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <FaChevronLeft />
            </div>
            <div
              className="swiper-button-next md:text-2xl text-xl bg-white/70 hover:bg-black/50 hover:text-white text-black p-3 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
