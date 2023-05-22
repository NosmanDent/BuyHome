import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MenuBar = () => {
  return (
    <motion.div className=" flex flex-col py-2 px-16">
      <motion.div
        className="md:flex hidden flex-1 flex-wrap items-center justify-center xl:gap-6 gap-4 cursor-pointer whitespace-nowrap"
        initial={{
          y: -150,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <NavLink
          to="men"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
        >
          MEN
        </NavLink>
        <NavLink to="women">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            WOMEN
          </button>
        </NavLink>
        <NavLink to="bathandbodies">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            BATH AND BODY
          </button>
        </NavLink>
        <NavLink to="fragrance">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            FRAGRANCE
          </button>
        </NavLink>
        <NavLink to="skincare">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4  xl:text-sm text-xs">
            SKIN CARE
          </button>
        </NavLink>
        <NavLink to="kidsandbabies">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            KIDS & BABIES
          </button>
        </NavLink>
        <NavLink to="contactus">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            CONTACT US
          </button>
        </NavLink>
        <NavLink to="aboutus">
          <button className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95] text-white xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            ABOUT US
          </button>
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default MenuBar;
