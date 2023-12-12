import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiBillFill, RiSettings5Fill } from "react-icons/ri";
import { BiSolidCategory, BiLogOut } from "react-icons/bi";
import {
  MdCategory,
  MdOutlineWarningAmber,
  MdOutlineSystemUpdate,
} from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
function Sidebar() {
  const navigate = useNavigate();
  const [sOpen, SetSopen] = useState(false);
  const today = new Date().toDateString();

  return (
    <>
      <div className=" shadow-md relative  min-h-[95vh] overflow-y-scroll">
        <h2 className="text-3xl bold text-center bg-primary  p-2">ShopMania</h2>

        <ul className="mt-3 shadow-lg">
          <li className="sidebar-list  " onClick={() => navigate(`/admin`)}>
            <span>
              <FaHome size={20} className="mx-3" />
            </span>
            <span>Dashboard</span>
            {/* <Link to={"/admin"}>DashBoard</Link> */}
          </li>
          <li
            className="sidebar-list"
            onClick={() => navigate(`/admin/products`)}
          >
            <span>
              <MdCategory size={20} className="mx-3" />
            </span>
            <span>Products</span>

            {/* <Link to={"/admin"}>Products</Link> */}
          </li>
          <li className="sidebar-list" onClick={() => navigate(`/admin`)}>
            <span>
              <RiBillFill size={20} className="mx-3" />
            </span>
            <span>Orders</span>

            {/* <Link to={"/admin"}>Orders</Link> */}
          </li>
          <li className="sidebar-list" onClick={() => navigate(`/admin`)}>
            <span>
              <BiSolidCategory size={20} className="mx-3" />
            </span>
            <span>Categories</span>

            {/* <Link to={"/admin"}>Categories</Link> */}
          </li>
          <li
            className="sidebar-list"
            onClick={() => SetSopen((prev) => !prev)}
          >
            <span>
              <RiSettings5Fill size={20} className="mx-3" />
            </span>
            <span className="flex justify-between w-full">
              <span> Settings</span>
              <span>
                {!sOpen ? (
                  <TiArrowSortedDown size={20} />
                ) : (
                  <TiArrowSortedUp size={20} />
                )}
              </span>
            </span>
            {/* <Link to={"/admin"}>Setting</Link> */}
          </li>

          {/* dropdown */}
          {sOpen ? (
            <div className="  w-full ">
              <ul className=" text-sm px-2  py-1">
                <li className="sidebar-list ">
                  <span>
                    <MdOutlineWarningAmber size={20} className="mx-3" />
                  </span>
                  <span>Roles & Permissons</span>
                </li>
                <li className="sidebar-list ">
                  <span>
                    <MdOutlineSystemUpdate size={20} className="mx-3" />
                  </span>
                  <span>System</span>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <li className="sidebar-list ">
            <span>
              <BiLogOut size={20} className="mx-3" />
            </span>
            <span>LogOut</span>
          </li>
        </ul>

        <div className="absolute bottom-0  bg-white w-full">
          <div className="flex  border-b border-primary">
            <div className="p-2 rounded-full">
              <img
                className="rounded-full"
                src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                height={50}
                width={50}
                alt="photos"
              />
            </div>
            <div className=" p-2">
              <div className="text-lg">Pravin Chaudhary</div>
              <span className="bg-red px-2 rounded-md text-white ">Admin</span>
            </div>
          </div>
          <div className="text-end font-bold px-3">{today}</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
