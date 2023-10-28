import React from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div>
        <div className="text-center ">
          <div className="text-3xl font-bold my-3">Create Account !</div>
          <div className="login-form shadow-xl ">
            <form action="">
              <div className="">
                {/* <label htmlFor="username ">Username :</label> */}
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="true"
                  placeholder="username "
                />
              </div>

              <div>
                {/* <label htmlFor="password">Password :</label> */}
                <input
                  type="password"
                  id="password"
                  name="pasword"
                  placeholder="password"
                />
              </div>
              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="+977-98********"
                />
              </div>
              <div>
                {/* <label htmlFor="address">Address :</label> */}
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>

              <div className="text-end px-2 italic text-secondary">
                <Link to={"/auth/login"}>Already have account?</Link>
              </div>
              <div className="my-4 text-end ">
                <button className="btn-primary ">Register</button>
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
