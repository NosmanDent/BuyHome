import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../CartContext";
import { CartContextNew } from "../CartContextNew";
import { CartContextMen } from "../CartContextMen";
import { CartContextWomen } from "../CartContextWomen";
import { CartContextBody } from "../CartContextBody";
import { CartContextFragrance } from "../CartContextFragrance";
import { CartContextSkin } from "../CartContextSkin";
import { CartContextKids } from "../CartContextKids";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { SiInstacart } from "react-icons/si";
import { motion } from "framer-motion";
import bag from "../assets/arno-senoner-ooj5VfXq5o8-unsplash.jpg";
import shoe from "../assets/mn10.jpg";
import fag from "../assets/b10.jpg";
import bodyOne from "../assets/arno-senoner-Vn5VBVCP1EA-unsplash.jpg";
import bodyTwo from "../assets/articletwo.jpg";
import bodyThree from "../assets/f6.jpg";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMen, setToggleMen] = useState(false);
  const [toggleWomen, setToggleWomen] = useState(false);
  const [toggleBody, setToggleBody] = useState(false);
  const cart = useContext(CartContext);
  const cartNew = useContext(CartContextNew);
  const cartMen = useContext(CartContextMen);
  const cartWomen = useContext(CartContextWomen);
  const cartBody = useContext(CartContextBody);
  const cartFragrance = useContext(CartContextFragrance);
  const cartSkin = useContext(CartContextSkin);
  const cartKids = useContext(CartContextKids);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleWomenRef = useRef(null);
  const toggleMenRef = useRef(null);
  const toggleBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolling(currentScrollPos > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleWomenRef.current &&
        !toggleWomenRef.current.contains(event.target)
      ) {
        setToggleWomen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleWomenRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleMenRef.current &&
        !toggleMenRef.current.contains(event.target)
      ) {
        setToggleMen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleBodyRef.current &&
        !toggleBodyRef.current.contains(event.target)
      ) {
        setToggleBody(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleBodyRef]);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const productsCountNew = cartNew.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const productsCountMen = cartMen.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const productsCountWomen = cartWomen.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const productsCountBody = cartBody.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const productsCountFragrance = cartFragrance.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const productsCountSkin = cartSkin.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const productsCountKids = cartKids.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="">
      <div className=" bg-black flex flex-row flex-1 items-center justify-center text-xs text-center">
        <h1 className="text-white py-3 font-bold">
          Shipping outside of the U.S. or Canada?{" "}
          <span className="underline font-light cursor-pointer">
            Learn About International Shipping
          </span>
        </h1>
      </div>

      <motion.div
        className={`w-full px-6 gap-2 bg-[#2D8B95] flex flex-row items-center ${
          isScrolling
            ? "fixed top-0 left-0  bg-[#2D8B95] flex flex-row items-center  px-6 gap-2 shadow-lg z-50"
            : ""
        }`}
      >
        <div className="">
          <AiOutlineMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleNav(true)}
          />
          {toggleNav && (
            <motion.div
              className="fixed top-0 left-0 md:w-full w-[300px] h-[100vh] bg-white flex flex-col z-[5]"
              initial={{
                x: "-900px",
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <AiOutlineClose
                fontSize={27}
                className="text-[40px] text-black cursor-pointer absolute top-[20px] right-[20px]"
                onClick={() => setToggleNav(false)}
              />
              <motion.div className=" flex flex-col">
                <div className="flex flex-1 ml-6 flex-col items-start md:gap-8 gap-4  cursor-pointer whitespace-nowrap w-[200px] h-screen md:border-r-4 border-black">
                  <NavLink
                    to="/"
                    className="font-semibold cursor-pointer pt-10  "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    HOME
                  </NavLink>
                  <div className="">
                    <div
                      to=""
                      className="font-semibold cursor-pointer   "
                      onClick={() => setToggleMen(true)}
                    >
                      MEN
                    </div>
                    {toggleMen && (
                      <div
                        ref={toggleMenRef}
                        onClick={() => {
                          setToggleMen(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleMen(false);
                        }}
                        className=" p-6 md:flex hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <h1 className="text-2xl font-bold font-serif pl-6">
                            Just Men, Check through for collect....
                          </h1>
                          <div className="flex flex-row">
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                bag Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={bag}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="men">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                Shoe Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={shoe}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="men">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                BestSeller Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={fag}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="men">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <h1 className="pl-6 font-bold font-serif ">
                            what we have for you?
                          </h1>
                          <div className="pl-6 font-semibold font-mono flex flex-1 flex-wrap text-sm items-center justify-between">
                            <h1>Skin Care</h1>
                            <h1>Fragrance</h1>
                            <h1>Shoe</h1>
                            <h1>Cleanser</h1>
                            <h1>Accessories</h1>
                            <h1>Brands</h1>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      to=""
                      className="font-semibold cursor-pointer   "
                      onClick={() => setToggleWomen(true)}
                    >
                      WOMEN
                    </div>
                    {toggleWomen && (
                      <div
                        ref={toggleWomenRef}
                        onClick={() => {
                          setToggleWomen(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleWomen(false);
                        }}
                        className=" p-6 md:flex flex-col hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <h1 className="text-2xl font-bold font-serif pl-6">
                            Just Women, Check through for collect....
                          </h1>

                          <div className="pl-6 font-semibold font-mono flex flex-1 flex-row items-center justify-center">
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-red-600 mt-8">
                                Skin Care
                              </h1>
                              <h1 className="mt-4">Body Cream</h1>
                              <h1 className="mt-4">Cleanser</h1>
                              <h1 className="mt-4">Hair Bag</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-blue-600 mt-8">
                                Fragrance
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl  mt-8">
                                Shoe
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-blue-600 mt-8">
                                Cleanser
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-lime-600 mt-8">
                                Accessories
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-stone-600 mt-8">
                                Brands
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                          </div>
                        </div>
                        <NavLink to="women" className="mx-auto">
                          <button className="bg-black text-white py-3 px-5 rounded-full w-[150px]  mt-4">
                            SHOP NOW
                          </button>
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      to=""
                      className="font-semibold cursor-pointer   "
                      onClick={() => setToggleBody(true)}
                    >
                      BATH AND BODY
                    </div>
                    {toggleBody && (
                      <div
                        ref={toggleBodyRef}
                        onClick={() => {
                          setToggleBody(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleBody(false);
                        }}
                        className=" p-6 md:flex hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <h1 className="text-2xl font-bold font-serif pl-6">
                            Bath and Body, Check through for collect....
                          </h1>
                          <div className="flex flex-row">
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                bag Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={bodyOne}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                Shoe Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={bodyTwo}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h1 className="text-lg font-bold font-serif pl-6 mt-6">
                                BestSeller Store
                              </h1>
                              <div className="pl-6">
                                <img
                                  src={bodyThree}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">shop now</h1>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <h1 className="pl-6 font-bold font-serif ">
                            what we have for you?
                          </h1>
                          <div className="pl-6 font-semibold font-mono flex flex-1 flex-wrap text-sm items-center justify-between">
                            <h1>Skin Care</h1>
                            <h1>Fragrance</h1>
                            <h1>Shoe</h1>
                            <h1>Cleanser</h1>
                            <h1>Accessories</h1>
                            <h1>Brands</h1>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <NavLink
                    to="fragrance"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    FRAGRANCE
                  </NavLink>
                  <NavLink
                    to="skincare"
                    className="font-semibold cursor-pointer  "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    SKIN CARE
                  </NavLink>
                  <NavLink
                    to="kidsandbabies"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    KIDS & BABIES
                  </NavLink>
                  <NavLink
                    to="contactus"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    CONTACT US
                  </NavLink>
                  <NavLink
                    to="aboutus"
                    className="font-semibold cursor-pointer   "
                  >
                    ABOUT US
                  </NavLink>
                  <div className="md:hidden flex">
                    <Menu handleClick={handleClick} />
                  </div>

                  <motion.input
                    type="search"
                    name=""
                    id=""
                    className="xl:w-[250px] lg:w-[200px] flex md:hidden  h-10 px-3 border rounded-tr-full rounded-br-full border-black focus:outline-none capitalize"
                    placeholder="Search"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
        <div className="flex flex-1 flex-row items-center justify-between bg-[#2D8B95] py-4  overflow-hidden">
          <div>
            <div className="flex flex-1 flex-row items-center gap-4">
              <div className="md:flex hidden">
                <Menu handleClick={handleClick} />
              </div>

              <div className="md:flex hidden">
                <h1 className="text-white font-bold cursor-pointer lg:text-xs text-sm ">
                  Discovery
                </h1>
              </div>
            </div>
          </div>

          <div className="">
            <Link to="/">
              <div className="flex flex-row items-center tracking-tighter">
                <h1 className="lg:text-3xl text-2xl text-white  font-bold cursor-pointer font-serif">
                  Buy
                </h1>
                <h1 className="font-serif font-bold">Time</h1>
                <div>
                  <SiInstacart className="text-white lg:text-4xl text-3xl" />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-2 ">
            <div>
              <motion.input
                type="search"
                name=""
                id=""
                className="xl:w-[250px] lg:w-[200px] md:flex hidden rounded-full h-10 px-3 focus:outline-none capitalize"
                placeholder="Search"
                initial={{
                  x: "-500px",
                }}
                whileInView={{
                  x: 0,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 2,
                }}
              />
            </div>
            <Link to="cart">
              <motion.button
                className="flex flex-row  item-center text-white justify-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1.5,
                }}
                transition={{
                  duration: 3,
                }}
              >
                <BsBag className="text-3xl" />{" "}
                <span className="text-white text-xs font-bold">
                  {productsCount +
                    productsCountNew +
                    productsCountMen +
                    productsCountWomen +
                    productsCountBody +
                    productsCountFragrance +
                    productsCountSkin +
                    productsCountKids}
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

function Menu({ handleClick }) {
  const { user } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  return (
    <ul className="">
      <li
        className="cursor-pointer"
        onClick={() => {
          {
            handleClick();
          }
          setToggleNav(false);
        }}
      >
        {user ? (
          <button
            className="lg:bg-white lg:text-black bg-red-700 text-white font-semibold rounded-lg lg:py-2 lg:px-5 py-1 px-4 text-bold text-xs "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="lg:bg-white lg:text-black bg-blue-700 text-white font-semibold rounded-lg lg:py-2 lg:px-5 py-1 px-4  text-bold text-xs "
          >
            Registration / Login
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
