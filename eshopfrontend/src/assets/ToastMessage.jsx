import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = (message) => toast(message);
const notifyError = (message) => toast(message);
const ToastMessage = () => {
  //   const notify = () => toast("message");
  //   notify();
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export { ToastMessage, notifySuccess, notifyError };
