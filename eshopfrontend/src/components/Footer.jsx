import React from "react";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 py-[2rem] gap-3  px-[2rem]  md:px-[5rem] bg-white border-t-2 border-primary shadow">
        <div>
          <h2 className="text-primary text-xl font-bold mb-3">Customer Care</h2>
          <ul className="px-2">
            <li>
              <Link to={"/"}>Help Center</Link>
            </li>
            <li>
              <Link to={"/"}>Return and Refunds</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-primary text-xl font-bold mb-3"> Company</h2>
          <ul className="px-2">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Terms and Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Privacy and Policy</Link>
            </li>
            <li>
              <Link to={"/"}>Payments</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-primary  text-xl font-bold mb-3"> ShopMania</h2>
          <div className="flex ">
            <div>
              <img
                className=" w-[100%] h-20  cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTv9v0ZijQtopxkX0JT_LRMU-2xBU35H8Ug&usqp=CAU"
                alt="logo"
              />
            </div>
            {/* <div>
              <h1 className="font-bold text-3xl p-2 ">shopMania</h1>
            </div> */}
          </div>
          <div className=" my-3">
            <span className="p-3">Follow us on :</span>
            <div className="text-3xl flex  gap-2 px-3">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
