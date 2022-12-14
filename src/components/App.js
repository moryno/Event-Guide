import CategoryList from "../pages/CategoryList";
import SingleProduct from "../pages/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Register from "../pages/Register";
import { UserContext } from "../context/Context";

import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

function App() {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");

  const onSearch = (newInput) => {
    setInput(newInput);
  };

  return (
    <Router>
      <Navbar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:category"
          element={<CategoryList input={input} />}
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
