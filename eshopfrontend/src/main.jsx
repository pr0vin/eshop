import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./assets/ScrollToTop.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import axios from "axios";
import { CategoryProvider } from "./context/categoryContext.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ToastMessage } from "./assets/ToastMessage.jsx";
axios.defaults.baseURL = "http://localhost:9000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ToastMessage />
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
