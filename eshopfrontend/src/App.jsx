import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Index from "./pages/Index";
import Help from "./pages/Help";
import Register from "./auth/Register";
import authIndex from "./auth/authIndex";
import ProductDetails from "./elements/ProductDetails";
import cart from "./pages/cart";
import { ProtectedRoute, IsAdminAuthorized } from "./auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
import AdminIndex from "./Admin/AdminIndex";
import DashBoard from "./Admin/layout/DashBoard";
import Products from "./Admin/layout/Products";
import CategoriesView from "./elements/CategoriesView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index}>
          <Route path="/" index Component={Home} />
          <Route path="/help" Component={Help} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route path="/categories/:id" Component={CategoriesView} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/bag" Component={cart} />
          </Route>
        </Route>
        <Route path="/auth/*" Component={authIndex}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" Component={NotFound} />

        <Route path="/" Component={IsAdminAuthorized}>
          <Route path="/admin" Component={AdminIndex}>
            <Route path="/admin/" index Component={DashBoard} />
            <Route path="/admin/products" index Component={Products} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
