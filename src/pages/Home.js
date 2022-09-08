import React from "react";
import Header from "../components/Header";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Items />
    </div>
  );
};

export default Home;
