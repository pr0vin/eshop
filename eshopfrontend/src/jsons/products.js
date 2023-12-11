const products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "./images/tShirt6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 3.5,
      reviews: 50,
    },
    discount: 0,
    featured: true,
    stock: 20,
  },
  {
    id: 2,
    name: "women t-shirts ans the combo for the winter",
    price: 5000,
    image: "./images/tshirt7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 4,
      reviews: 40,
    },
    discount: 25,
    stock: 20,
    featured: true,
  },
  {
    id: 3,
    name: "men wear sweater for the day",
    price: 3000,
    image: "./images/tshirt1.avif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 2.5,
      reviews: 80,
    },
    discount: 25,
    featured: true,
    stock: 20,
  },
  {
    id: 4,
    name: "men wear sweater for the day",
    price: 5000,
    image: "./images/jacket3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 4,
      reviews: 30,
    },
    discount: 25,
    featured: false,
    stock: 20,
  },
  {
    id: 5,
    name: "men wear sweater for the day",
    price: 8000,
    image: "./images/jacket1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 3.5,
      reviews: 76,
    },
    discount: 25,
    featured: false,
    stock: 20,
  },
  {
    id: 6,
    name: "men wear sweater for the day",
    price: 10000,
    image: "./images/jacket3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: {
      stars: 3.5,
      reviews: 40,
    },
    discount: 25,
    featured: true,
    stock: 20,
  },
];
export default products;
