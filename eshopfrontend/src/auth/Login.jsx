import React from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="text-center  ">
        <div className="text-3xl font-bold my-3 ">
          <h1>Welcome Back !</h1>
        </div>

        <section className="login-form shadow-xl">
          <form action="">
            <div>
              {/* <label htmlFor="username ">Username :</label> */}
              <input
                type="text"
                name="username"
                // autoComplete="true"
                placeholder="username "
                required
              />
            </div>

            <div>
              {/* <label htmlFor="password">Password :</label> */}
              <input
                type="password"
                id="password"
                name="pasword"
                placeholder="password"
                required
              />
            </div>

            <div className="text-end px-2 italic text-secondary">
              <Link to={"/auth/register"}>
                Create Account?
                {/* <Link to={"/auth/register"}>
                  <strong className="italic text-primary">Register</strong>
                </Link> */}
              </Link>
            </div>
            <div className="my-4 text-end ">
              <button className="btn-primary ">Login</button>
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
