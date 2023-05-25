// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayNew = [
  {
    id: 1,
    title: "gSlick Ba",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "sUNBLCKA Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "bMolli Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "https://images.unsplash.com/photo-1616750819801-4311f2c43890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "Viking Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 71.9,
    img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "maPra Chair",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 3149.99,
    img: "https://images.unsplash.com/photo-1634822929331-ee4dc2c97fc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Bri",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 40.99,
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    title: "o Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 329.99,
    img: "https://images.unsplash.com/photo-1582896911329-35927907b8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=482&q=80",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    title: "Pxe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80",
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
