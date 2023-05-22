import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ShopLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    backgroundColor: "#2D8B95",
  };
  return (
    <section>
      <nav className="flex items-center justify-center flex-wrap xl:gap-x-10 lg:gap-x-6 gap-x-4 gap-y-2 py-2 bg-stone-100">
        <NavLink
          to="."
          end
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          MEN
        </NavLink>
        <NavLink
          to="women"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          WOMEN
        </NavLink>
        <NavLink
          to="bathandbodies"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          BATH AND BODY
        </NavLink>
        <NavLink
          to="fragrance"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          FRAGRANCE
        </NavLink>
        <NavLink
          to="skincare"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          SKIN CARE
        </NavLink>
        <NavLink
          to="kidsandbabies"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          KIDS & BABIES
        </NavLink>
        <NavLink
          to="contactus"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          CONTACT US
        </NavLink>
        <NavLink
          to="aboutus"
          className="font-semibold cursor-pointer bg-black hover:bg-[#2D8B95]  text-white xl:py-2 xl:px-6 py-1 px-4 text-xs "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          ABOUT US
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
};

export default ShopLayout;
