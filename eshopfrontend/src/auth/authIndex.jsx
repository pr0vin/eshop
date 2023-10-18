import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../components/UserNav";

function authIndex() {
  return (
    <>
      <div className="md:sticky sm:sticky top-0 z-10">
        <UserNav />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default authIndex;
