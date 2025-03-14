import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/PageLayout";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
};

export default App;
