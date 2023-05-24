// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArray = [
  {
    id: "price_1Mz2JwBqowYqMVVia5v35wnq",
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 4.99,
    img: "../assets/arno-senoner-HFE2RyC76tw-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2N4BqowYqMVVi0WQoIFDV",
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../assets/bestsellertwo.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2O3BqowYqMVViFIuyxHki",
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "../assets/heroThree.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2PEBqowYqMVViRACcd2o1",
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../assets/bestsellerthree.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2QCBqowYqMVVi07cWz35n",
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "../assets/bestsellerfour.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2R0BqowYqMVViRLJlPwtx",
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../assets/arno-senoner-ooj5VfXq5o8-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2RyBqowYqMVViSujuGKLl",
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 39.99,
    img: "../assets/creative-headline-APNnyM36puU-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "price_1Mz2SxBqowYqMVViLszO99UI",
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../assets/jonathan-borba-k3n8TN5WwJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
