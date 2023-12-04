import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <main className="layout-container">
      <Header />
      <div className="layout-content"><Outlet /></div>
      
      <Footer />
    </main>
  );
};

export default Layout;
