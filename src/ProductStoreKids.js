// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayKids = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "bestseller",
    price: 4.99,
    img: "../src/assets/k1.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../src/assets/k2.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "../src/assets/k3.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 71.9,
    img: "../src/assets/k4.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "../src/assets/k5.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/k6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "sold-out",
    price: 39.99,
    img: "../src/assets/k7.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k8.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k9.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/k10.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 11,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k11.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k12.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k13.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 14,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/k14.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/k15.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataKids(id) {
  let productDataKids = productsArrayKids.find((product) => product.id === id);

  if (productDataKids == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataKids;
}

export { productsArrayKids, getProductDataKids };
