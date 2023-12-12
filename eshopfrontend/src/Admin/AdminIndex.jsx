import React from "react";
import Sidebar from "./layout/Sidebar";
import { Outlet } from "react-router-dom";

function AdminIndex() {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="">
          <Sidebar />
        </div>
        <div className="col-span-4 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminIndex;
