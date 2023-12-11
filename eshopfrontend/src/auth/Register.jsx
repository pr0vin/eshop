import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { notifySuccess, notifyError } from "../assets/ToastMessage";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user.confirm && !user.password) {
        notifyError("please fil the password field");
      } else {
        if (user.password === user.confirm) {
          const res = await axios.post(`/api/auth/register`, user);
          // console.log(res);
          if (res.status === 200) {
            notifySuccess("Successfully registered");
            setTimeout(() => {
              navigate(`/auth/login`);
            }, 3000);
          }
        } else {
          notifyError("passwords do not match");
        }
      }
    } catch (error) {
      notifyError(error.response.data);
    }
  };
  return (
    <>
      <div>
        <div className="text-center ">
          <div className="text-3xl font-bold my-3">
            <h1 className="">Create Account !</h1>
          </div>
          <div className="login-form shadow-xl ">
            <form action="">
              <div className="">
                {/* <label htmlFor="username ">Username :</label> */}
                <input
                  type="text"
                  id="name"
                  onChange={handleInput}
                  name="name"
                  value={user.name}
                  autoComplete={"true"}
                  placeholder="Name "
                  required
                />
              </div>

              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete={"true"}
                  onChange={handleInput}
                  value={user.email}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="phone"
                  id="phone"
                  onChange={handleInput}
                  name="phone"
                  value={user.phone}
                  autoComplete={"true"}
                  placeholder="+977-98********"
                />
              </div>
              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="text"
                  id="address"
                  onChange={handleInput}
                  name="address"
                  value={user.address}
                  placeholder="Address"
                  autoComplete={"true"}
                />
              </div>
              <div>
                {/* <label htmlFor="password">Password :</label> */}
                <input
                  type="password"
                  id="password"
                  onChange={handleInput}
                  name="password"
                  value={user.password}
                  placeholder="password"
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="password">Password :</label> */}
                <input
                  type="password"
                  id="confirm"
                  onChange={handleInput}
                  name="confirm"
                  value={user.confirm}
                  placeholder="confirm password"
                  required
                />
              </div>

              <div className="text-end px-2 italic text-secondary">
                <Link to={"/auth/login"}>Already have account?</Link>
              </div>
              <div className="my-4 text-end ">
                <button onClick={handleSubmit} className="btn-primary ">
                  Register
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
