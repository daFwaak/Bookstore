import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
