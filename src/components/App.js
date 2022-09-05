import Category from "./Category";
import CategoryList from "../pages/CategoryList";
import Items from "./Items";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import SingleProduct from "../pages/SingleProduct";
import { Cart } from "../pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/success" element={<Success />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
