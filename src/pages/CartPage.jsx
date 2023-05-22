import { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "../components/CartProduct";
import { CartContextNew } from "../CartContextNew";
import CartProductNew from "../components/CartProductNew";
import { CartContextMen } from "../CartContextMen";
import CartProductMen from "../components/CartProductMen";
import { CartContextWomen } from "../CartContextWomen";
import CartProductWomen from "../components/CartProductWomen";
import { CartContextBody } from "../CartContextBody";
import CartProductBody from "../components/CartProductBody";
import { CartContextFragrance } from "../CartContextFragrance";
import CartProductFragrance from "../components/CartProductFragrance";
import { CartContextSkin } from "../CartContextSkin";
import CartProductSkin from "../components/CartProductSkin";
import { CartContextKids } from "../CartContextKids";
import CartProductKids from "../components/CartProductKids";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useContext(CartContext);
  const cartNew = useContext(CartContextNew);
  const cartMen = useContext(CartContextMen);
  const cartWomen = useContext(CartContextWomen);
  const cartBody = useContext(CartContextBody);
  const cartFragrance = useContext(CartContextFragrance);
  const cartSkin = useContext(CartContextSkin);
  const cartKids = useContext(CartContextKids);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [...cart.items, ...cartNew.items] }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

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

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-1  w-full h-[300px] graf_g mb-20">
        <h1 className="lg:text-6xl text-4xl font-serif font-bold text-[#22c93e] flex items-centertext-center justify-center mx-auto p-40">
          CART
        </h1>
        <div className="flex absolute items-center ml-4 mt-4 gap-2">
          <Link to="/">
            <h1 className="text-sm font-semibold text-[#22c93e] hover:text-white">
              Home
            </h1>
          </Link>
        </div>
      </div>

      {productsCount > 0 ||
      productsCountNew > 0 ||
      productsCountMen > 0 ||
      productsCountWomen > 0 ||
      productsCountBody > 0 ||
      productsCountFragrance > 0 ||
      productsCountSkin > 0 ||
      productsCountKids > 0 ? (
        <section className=" flex-col w-full mb-16 ">
          <p className="md:text-4xl text-center font-serif mb-6 text-2xl font-semibold">
            Items in your cart
          </p>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProduct>
          ))}
          {cartNew.items.map((currentProduct, idx) => (
            <CartProductNew
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductNew>
          ))}
          {cartMen.items.map((currentProduct, idx) => (
            <CartProductMen
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductMen>
          ))}
          {cartWomen.items.map((currentProduct, idx) => (
            <CartProductWomen
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductWomen>
          ))}
          {cartBody.items.map((currentProduct, idx) => (
            <CartProductBody
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductBody>
          ))}
          {cartFragrance.items.map((currentProduct, idx) => (
            <CartProductFragrance
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductFragrance>
          ))}
          {cartSkin.items.map((currentProduct, idx) => (
            <CartProductSkin
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductSkin>
          ))}
          {cartKids.items.map((currentProduct, idx) => (
            <CartProductKids
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
              className=""
            ></CartProductKids>
          ))}

          <div className="space-y-1 text-right bg-[#111827] pr-10 pb-1">
            <p className="text-white">
              Total:{" "}
              {(
                cart.getTotalCost() +
                cartNew.getTotalCost() +
                cartMen.getTotalCost() +
                cartWomen.getTotalCost() +
                cartBody.getTotalCost() +
                cartFragrance.getTotalCost() +
                cartSkin.getTotalCost() +
                cartKids.getTotalCost()
              ).toFixed(2)}
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4 bg-[#111827] pr-10 pb-6">
            <Link to="/">
              <button
                type="button"
                className="px-6 py-2 border rounded-md text-white border-violet-400"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
            </Link>
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
              onClick={checkout}
            >
              <span className="sr-only sm:not-sr-only">Continue to </span>
              Checkout
            </button>
          </div>
        </section>
      ) : (
        <div className="flex flex-col flex-1 items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-16">
            Nothing dey your Cart
          </h1>
          <h1 className="text-xl md:text-2xl font-semibold mb-16 text-center px-2">
            My Brother be like your mouth don dey dry. Go hustle!
          </h1>
        </div>
      )}
    </div>
  );
};

export default CartPage;
