import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { notifySuccess, notifyError } from "../assets/ToastMessage";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, makeToken] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(false);
  const setToken = (newtoken) => {
    makeToken(newtoken);
  };

  const logOut = () => {
    try {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      navigate("/");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (loginData) => {
    try {
      const res = await axios.post(`/api/auth/login`, loginData);
      if (res) {
        setToken(res.data.token);
        let user = jwtDecode(res.data.token);
        notifySuccess("success");
        if (user.isAdmin) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
      let user = jwtDecode(token);
      if (user.isAdmin) {
        setIsAdmin(true);
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const values = useMemo(
    () => ({
      token,
      setToken,
      logOut,
      isAdmin,
      handleLogin,
    }),
    [token]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
