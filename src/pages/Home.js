import React from "react";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
