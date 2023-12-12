import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);

  return <Outlet />;
};

const IsAdminAuthorized = () => {
  const navigate = useNavigate();
  const { token, isAdmin } = useAuth();

  useEffect(() => {
    if (token && !isAdmin) {
      navigate("/notfound");
    }
  }, [isAdmin]);
  return <Outlet />;
};

export { ProtectedRoute, IsAdminAuthorized };
