import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { CartContextNew } from "../CartContextNew";
import SignInModal from "./SignInModal";
import { BsBag, BsBasket3 } from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import { motion } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";

const ProductCardNew = (props) => {
  const { product } = props;
  const cart = useContext(CartContextNew);
  const productQuantity = cart.getProductQuantity(product.id);
  const { saves } = useSelector((state) => state.saves);
  const { user } = useSelector((state) => state.user);
  const [displayToast, setDisplayToast] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const { isLoading } = useQuery("products", () =>
    fetch("../CartContextNew").then((res) => res.json())
  );

  useEffect(() => {
    //Hide notification toast after 10 seconds
    const intervalId = setInterval(() => {
      setDisplayToast(false);
      setShowRemoveModal(false); // Add this line to hide the modal
    }, 10000);

    return () => clearInterval(intervalId);
  }, [displayToast]);

  const handleAddToCart = () => {
    if (!user) {
      setShowSignInModal(true);
      return;
    }
    cart.addOneToCart(product.id);
  };

  if (isLoading) {
    // Show skeleton loader while data is being fetched
    return <SkeletonLoader />;
  }

  return (
    <section className="">
      <div className="w-64 p-6 bg-[#F6F4F7] ml-16 mt-6 md:mt-0 md:ml-0">
        <div className=" w-14 h-5 absolute top-0 left-0 bg-[#2d8b95] z-10 mt-3 md:ml-2 ml-10 text-white text-sm font-semibold font-sans px-3">
          NEW
        </div>
        <img
          src={product.img}
          alt="/"
          className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:scale-110 ease-in duration-400 transition-all duration-700 "
        />
        <div className="flex flex-col items-start">
          <h1 className="text-xs text-stone-500 font-mono tracking-widest">
            {product.title}
          </h1>
          <h1 className="text-sm text-stone-700 font-mono tracking-widest">
            {product.subTitle}
          </h1>
          <div className="flex flex-col mt-4">
            <p className="text-md text-stone-900 font-bold tracking-wider">
              ${product.price}
            </p>
            <p className="">{product.rating}</p>
          </div>
        </div>
        {productQuantity > 0 ? (
          <>
            <div className="flex flex-row">
              <div className="text-green-500 flex flex-row items-center ">
                <BsBasket3 /> <span className="text-xs">{productQuantity}</span>
              </div>
              <button
                className="rounded-full border border-stone-300 text-gray-400 px-2 ml-auto"
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </button>
              <button
                className="rounded-full border border-stone-300 text-gray-400 px-2 mx-1"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                -
              </button>
              <button
                className="text-xl"
                onClick={() => cart.deleteFromCart(product.id)}
              >
                <FcEmptyTrash />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 absolute items-center justify-center bg-stone-300 p-3 rounded-full">
            <button
              className="hover:text-gray-700 text-[#2d8b95] text-2xl hover:scale-110 ease-in duration-500"
              onClick={handleAddToCart}
            >
              <BsBag />
            </button>
          </div>
        )}
      </div>

      {showSignInModal && (
        <SignInModal
          onClose={() => setShowSignInModal(true)}
          onSignIn={() => {
            setShowSignInModal(false);
            cart.addOneToCart(product.id);
          }}
        />
      )}
    </section>
  );
};

export default ProductCardNew;
