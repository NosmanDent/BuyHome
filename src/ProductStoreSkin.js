// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArraySkin = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 4.99,
    img: "../src/assets/arno-senoner-HFE2RyC76tw-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 9.99,
    img: "../src/assets/arno-senoner-ooj5VfXq5o8-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "../src/assets/heroThree.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "../src/assets/aylin-cobanoglu-5A9cFNtWav0-unsplash.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "../src/assets/bestsellertwo.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "../src/assets/arno-senoner-Vn5VBVCP1EA-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 39.99,
    img: "../src/assets/jed-owen-PpzBE1hWeGI-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 11,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 14,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "../src/assets/irene-kredenets-pSVYyO-XlJk-unsplash.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function getProductDataSkin(id) {
  let productDataSkin = productsArraySkin.find((product) => product.id === id);

  if (productDataSkin == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataSkin;
}

export { productsArraySkin, getProductDataSkin };
