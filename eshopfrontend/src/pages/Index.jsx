import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      <div>
        <div className="md:sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="min-h-screen">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
