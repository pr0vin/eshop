import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

const { token, isAdmin } = useAuth();
const ProtectedRoute = () => {
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);

  return <Outlet />;
};

export default ProtectedRoute;
