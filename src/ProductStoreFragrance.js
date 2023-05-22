// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayFragrance = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "sold-out",
    price: 4.99,
    img: "../src/assets/f1.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../src/assets/f2.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "../src/assets/f3.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../src/assets/f4.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 149.99,
    img: "../src/assets/f5.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/f6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 39.99,
    img: "../src/assets/f7.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f8.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f9.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f10.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 11,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/f11.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f12.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "best-seller",
    price: 569.99,
    img: "../src/assets/f13.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 14,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f14.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/f15.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataFragrance(id) {
  let productDataFragrance = productsArrayFragrance.find(
    (product) => product.id === id
  );

  if (productDataFragrance == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataFragrance;
}

export { productsArrayFragrance, getProductDataFragrance };
