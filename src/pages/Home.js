import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <ProductList />
      <Items />
      <Newsletter />
    </div>
  );
};

export default Home;
