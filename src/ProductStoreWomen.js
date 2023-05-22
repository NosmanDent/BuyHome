// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayWomen = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 4.99,
    img: "../src/assets/women15.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../src/assets/women1.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 49.99,
    img: "../src/assets/women2.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../src/assets/women3.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "../src/assets/women7.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/women4.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "sold-out",
    price: 39.99,
    img: "../src/assets/women5.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women8.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/women9.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 11,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women10.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women11.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "bestseller",
    price: 569.99,
    img: "../src/assets/women12.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 14,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women13.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/women14.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataWomen(id) {
  let productDataWomen = productsArrayWomen.find(
    (product) => product.id === id
  );

  if (productDataWomen == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataWomen;
}

export { productsArrayWomen, getProductDataWomen };
