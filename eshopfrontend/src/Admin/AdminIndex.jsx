import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { BsSearchHeartFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

function AdminIndex() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex">
        {open ? (
          <div
            className={`md:relative   md:left-0  ${
              open ? "fixed top-0 bottom-0   " : ""
            } w-[300px] overflow-y-auto`}
          >
            <div className="absolute z-10 right-0 ">
              <RxCross2
                size={20}
                className="hover:text-red m-1 md:hidden"
                onClick={() => setOpen(false)}
              />
            </div>
            <Sidebar />
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <div className=" flex justify-between bg-white px-3 py-2 min-h-[50px] shadow">
            <TfiMenuAlt
              size={25}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
            <div className=" flex py-1 px-3 border-lightwhite border rounded-md shadow">
              <input
                id="search"
                type="search"
                placeholder="search"
                className="focus:outline-none mx-auto md:w-72"
              />
              <div className="ms-2 ">
                <BsSearchHeartFill size={20} />
              </div>
            </div>

            <FaBell size={20} />
          </div>

          <div className="p-3 text-end">
            <Link to={"/"} className="mx-1">
              Home
            </Link>
            /
            <Link to={"/admin"} className="mx-1">
              Dashboard
            </Link>
          </div>

          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminIndex;
