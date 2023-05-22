// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayMen = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "bestseller",
    price: 4.99,
    img: "../src/assets/mn1.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../src/assets/mn2.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 49.99,
    img: "../src/assets/mn3.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../src/assets/mn4.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 149.99,
    img: "../src/assets/mn5.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/mn6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 39.99,
    img: "../src/assets/mn7.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/mn8.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/mn9.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/mn10.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 11,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/mn11.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/mn12.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "../src/assets/mn13.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 14,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "soldout",
    price: 569.99,
    img: "../src/assets/mn14.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/mn15.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataMen(id) {
  let productDataMen = productsArrayMen.find((product) => product.id === id);

  if (productDataMen == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataMen;
}

export { productsArrayMen, getProductDataMen };
