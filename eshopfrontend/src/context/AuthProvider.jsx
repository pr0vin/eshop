import axios from "axios";
import React, { createContext, useContext, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { notifySuccess, notifyError } from "../assets/ToastMessage";

const AuthContext = createContext();
const init = {
  token: localStorage.getItem("token"),
  isAdmin: false,
};
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, init);

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
        dispatch({ type: "auth", payload: res.data.token });
        let user = jwtDecode(res.data.token);
        notifySuccess("success");
        if (user.isAdmin) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  useMemo(() => {
    if (state.token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + state.token;
      localStorage.setItem("token", state.token);
      let user = jwtDecode(state.token);
      if (user.isAdmin) {
        dispatch({ type: "admin" });
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ ...state, handleLogin, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };

const reducer = (state, action) => {
  switch (action.type) {
    case "admin":
      return {
        ...state,
        isAdmin: true,
      };
    case "auth":
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
