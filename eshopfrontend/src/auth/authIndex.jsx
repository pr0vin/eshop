import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "../components/UserNav";
import { useAuth } from "../context/AuthProvider";
import Navbar from "../components/Navbar";
import Modal from "../assets/Modal";

function authIndex() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <>
      <div className="md:sticky sm:sticky top-0 z-10">
        {/* <Modal /> */}
        <UserNav />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default authIndex;
