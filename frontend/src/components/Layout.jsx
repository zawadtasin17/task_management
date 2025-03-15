import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-20 p-6 shadow-lg shadow-blue-300 border border-cyan-800 rounded-2xl bg-white">
      <ToastContainer />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
