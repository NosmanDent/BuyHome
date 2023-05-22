import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { CartContextBody } from "../CartContextBody";
import SignInModal from "../components/SignInModal";
import { BsBag, BsBasket3 } from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import SkeletonLoader from "./SkeletonLoader";

const ProductCardBody = (props) => {
  const { product } = props;
  const cart = useContext(CartContextBody);
  const productQuantity = cart.getProductQuantity(product.id);
  const { saves } = useSelector((state) => state.saves);
  const { user } = useSelector((state) => state.user);
  const [displayToast, setDisplayToast] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

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

  const { isLoading } = useQuery("products", () =>
    fetch("../CartContextBody").then((res) => res.json())
  );

  if (isLoading) {
    // Show skeleton loader while data is being fetched
    return <SkeletonLoader />;
  }

  return (
    <section className="">
      <div className="w-64 p-6 bg-[#F6F4F7] m-8">
        {product.hasOwnProperty("status") && (
          <div className="w-20 text-center h-5 absolute bg-[#2d8b95] z-10 mt-3 md:ml-2 ml-1 text-white text-sm font-semibold font-sans px-3">
            {product.status}
          </div>
        )}
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
                className=""
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

export default ProductCardBody;
