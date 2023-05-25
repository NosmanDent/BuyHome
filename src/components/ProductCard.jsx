import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { CartContext } from "../CartContext";
import SignInModal from "../components/SignInModal";
import { BsBag, BsBasket3 } from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";

const ProductCard = (props) => {
  const { product } = props;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  const { saves } = useSelector((state) => state.saves);
  const { user } = useSelector((state) => state.user);
  const [displayToast, setDisplayToast] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const { isLoading } = useQuery("products", () =>
    fetch("../CartContext").then((res) => res.json())
  );

  const handleCardClick = () => {
    setShowModal(true);
  };

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
      <div className="w-64 p-6 bg-[#F6F4F7] m-8">
        <motion.img
          src={product.img}
          alt="/"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 5,
          }}
          className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:scale-110 ease-in-out duration-400 transition-all duration-700 "
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
            <motion.button
              className="hover:text-gray-700 text-[#2d8b95] text-2xl hover:scale-110 ease-in duration-500"
              onClick={handleAddToCart}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 5,
              }}
            >
              <BsBag />
            </motion.button>
          </div>
        )}
      </div>

      {showSignInModal && (
        <SignInModal
          onClose={() => setShowSignInModal(false)}
          onSignIn={() => {
            setShowSignInModal(false);
            cart.addOneToCart(product.id);
          }}
        />
      )}
    </section>
  );
};

export default ProductCard;
