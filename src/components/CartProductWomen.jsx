import { CartContextWomen } from "../CartContextWomen";
import { useContext } from "react";
import { getProductDataWomen } from "../ProductStoreWomen";

function CartProductWomen(props) {
  const cart = useContext(CartContextWomen);
  const id = props.id;
  const quantity = props.quantity;
  const productDataWomen = getProductDataWomen(id);

  return (
    <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100 border-b-2 border-bg-stone-400">
      <ul className="flex flex-col divide-y divide-gray-700">
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
              src={productDataWomen.img}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="font-bold">{productDataWomen.title}</h3>
                  <h3 className="text-xs">{productDataWomen.subTitle}</h3>
                </div>
                <div className="text-right">
                  <p>{quantity} total</p>
                  <p>${(quantity * productDataWomen.price).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                  onClick={() => cart.deleteFromCart(id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                <button
                  className="rounded-full border-4 border-stone-300 text-gray-400 px-2 mr-2"
                  onClick={() => cart.addOneToCart(id)}
                >
                  +
                </button>
                <button
                  className="rounded-full border-4 border-stone-300 text-gray-400 px-2 "
                  onClick={() => cart.removeOneFromCart(id)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CartProductWomen;
