const products = [
  {
    id: 1,
    title: "Top Clouds Crop",
    price: 25000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../public/images/top1.webp",
  },
  {
    id: 2,
    title: "Top Helene",
    price: 20000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../public/images/top2.webp",
  },
  {
    id: 3,
    title: "Top Rock Colors",
    price: 22000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../public/images/top3.webp",
  },
  {
    id: 4,
    title: "Top Suri New",
    price: 23000,
    category: "tops",
    description: "Talles: XS, S, M, L",
    image: "../public/images/top4.webp",
  },
  {
    id: 5,
    title: "Pantalón Arizona",
    price: 35000,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../public/images/pantalon1.webp",
  },
  {
    id: 6,
    title: "Babucha New Josephine",
    price: 34000,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../public/images/pantalon2.webp",
  },
  {
    id: 7,
    title: "Pantalon Recto New Cuero",
    price: 32400,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../public/images/pantalon3.webp",
  },
  {
    id: 8,
    title: "Pantalon Slit Shine",
    price: 32700,
    category: "pantalones",
    description: "Talles: XS, S, M, L",
    image: "../public/images/pantalon4.jpg",
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};
