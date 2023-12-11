import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  });
  return (
    <>
      <div className="text-center">OOps ! Page not Found</div>
    </>
  );
}

export default NotFound;
