import axios from "axios";
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { handleLogin } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const HandleInputChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  return (
    <>
      <div className="text-center  ">
        <div className="text-3xl font-bold my-3 ">
          <h1>Welcome Back !</h1>
        </div>

        <section className="login-form shadow-xl">
          <form action="" onSubmit={HandleSubmit}>
            <div>
              {/* <label htmlFor="email ">email :</label> */}
              <input
                type="text"
                name="email"
                value={loginData.email}
                autoComplete={"true"}
                onChange={HandleInputChange}
                placeholder="email "
                required
              />
            </div>

            <div>
              {/* <label htmlFor="password">Password :</label> */}
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                placeholder="password"
                onChange={HandleInputChange}
                required
              />
            </div>

            <div className="text-end px-2 italic text-secondary">
              <Link to={"/auth/register"}>Create Account?</Link>
            </div>
            <div className="my-4 text-end ">
              <button type="submit" className="btn-primary  ">
                Login
              </button>
            </div>
            <span>Sign in With :</span>
            <div className="text-3xl flex justify-center gap-2 px-3">
              <span className=" ">
                <i className="text-blue">
                  <AiFillFacebook className="rounded-full" />
                </i>
              </span>
              <span className=" ">
                <i className="text-red ">
                  <AiOutlineGoogle />
                </i>
              </span>{" "}
              <span className=" ">
                <i className="text-blue">
                  <AiOutlineTwitter />
                </i>
              </span>
              <span className=" ">
                <i className="text-red">
                  <AiOutlineInstagram />
                </i>
              </span>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
