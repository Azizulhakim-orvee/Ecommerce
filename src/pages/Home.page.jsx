import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <Banner />

      <Products />

      <Footer />
    </div>
  );
};

export default Home;
