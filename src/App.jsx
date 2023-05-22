import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Cancel from "./pages/Cancel";
import CartPage from "./pages/CartPage";
import Store from "./pages/Store";
import Success from "./pages/Success";
import CartProvider from "./CartContext";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./app/store";
import CartProviderOne from "./CartContextNew";
import ShopLayout from "./components/ShopLayout";
import Men from "./components/Men";
import WomenHome from "./components/WomenHome";
import Bathbody from "./components/Bathbody";
import Fragrance from "./components/Fragrance";
import Skincare from "./components/Skincare";
import KidsBabies from "./components/KidsBabies";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import CartProviderMen from "./CartContextMen";
import CartProviderWomen from "./CartContextWomen";
import CartProviderBody from "./CartContextBody";
import CartProviderFragrance from "./CartContextFragrance";
import CartProviderSkin from "./CartContextSkin";
import CartProviderKids from "./CartContextKids";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Store />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<Login />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<WomenHome />} />
      <Route path="bathandbodies" element={<Bathbody />} />
      <Route path="fragrance" element={<Fragrance />} />
      <Route path="skincare" element={<Skincare />} />
      <Route path="kidsandbabies" element={<KidsBabies />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="aboutus" element={<AboutUs />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Men />} />
        <Route path="women" element={<WomenHome />} />
        <Route path="bathandbodies" element={<Bathbody />} />
        <Route path="fragrance" element={<Fragrance />} />
        <Route path="skincare" element={<Skincare />} />
        <Route path="kidsandbabies" element={<KidsBabies />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <CartProviderKids>
      <CartProviderSkin>
        <CartProviderFragrance>
          <CartProviderBody>
            <CartProviderWomen>
              <CartProviderMen>
                <CartProviderOne>
                  <CartProvider>
                    <Provider store={store}>
                      <RouterProvider router={router} />
                    </Provider>
                  </CartProvider>
                </CartProviderOne>
              </CartProviderMen>
            </CartProviderWomen>
          </CartProviderBody>
        </CartProviderFragrance>
      </CartProviderSkin>
    </CartProviderKids>
  );
}
