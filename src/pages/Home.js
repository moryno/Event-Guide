import React from "react";
import Header from "../components/Header";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Items />
      <Newsletter />
    </div>
  );
};

export default Home;
