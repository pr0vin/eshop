import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { createContext, useContext } from "react";

import ProductReducer from "../reducer/ProductReducer";
const ProductContext = createContext();

const init = {
  products: [],
  singleProduct: {},
};

const ProductProvider = ({ children }) => {
  const [state, setState] = useReducer(ProductReducer, init);

  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setState({ type: "SET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      const data = await res.data;
      setState({ type: "SET_SINGLE_PRODUCT", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, getProducts, getSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
