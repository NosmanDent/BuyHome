// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayNew = [
  {
    id: 1,
    title: "gSlick Ba",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 89.99,
    img: "../src/assets/new1.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "sUNBLCKA Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 19.99,
    img: "../src/assets/new2.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "bMolli Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "../src/assets/new3.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Viking Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../src/assets/new4.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "maPra Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "../src/assets/new5.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Bri",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/new6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "o Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 329.99,
    img: "../src/assets/new7.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Pxe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/new8.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataNew(id) {
  let productDataNew = productsArrayNew.find((product) => product.id === id);

  if (productDataNew == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataNew;
}

export { productsArrayNew, getProductDataNew };
