import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { createContext, useState } from "react";

const CategoryContext = createContext();

const init = {
  categories: [],
};
const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const res = await axios.get(`/api/categories`);
      dispatch({ type: "SET_CATEGORY", data: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <CategoryContext.Provider value={{ ...state }}>
      {children}
    </CategoryContext.Provider>
  );
};

const usecategoryContext = () => {
  return useContext(CategoryContext);
};

export { usecategoryContext, CategoryProvider };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        categories: action.data,
      };
  }
};
