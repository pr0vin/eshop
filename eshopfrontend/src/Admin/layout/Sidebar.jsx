import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" ">
        <h2 className="text-3xl bold text-center bg-primary  p-2">ShopMania</h2>

        <ul className="mt-3">
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
              <FaHome size={20} className="mx-3" />
            </span>
            <span>Products</span>

            {/* <Link to={"/admin"}>Products</Link> */}
          </li>
          <li className="sidebar-list" onClick={() => navigate(`/admin`)}>
            <span>
              <FaHome size={20} className="mx-3" />
            </span>
            <span>Orders</span>

            {/* <Link to={"/admin"}>Orders</Link> */}
          </li>
          <li className="sidebar-list" onClick={() => navigate(`/admin`)}>
            <span>
              <FaHome size={20} className="mx-3" />
            </span>
            <span>Categories</span>

            {/* <Link to={"/admin"}>Categories</Link> */}
          </li>
          <li className="sidebar-list" onClick={() => navigate(`/admin`)}>
            <span>
              <FaHome size={20} className="mx-3" />
            </span>
            <span>Settings</span>

            {/* <Link to={"/admin"}>Setting</Link> */}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
