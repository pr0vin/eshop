import React from "react";
import { Outlet } from "react-router-dom";

function authIndex() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default authIndex;
