import CategoryList from "../pages/CategoryList";
import SingleProduct from "../pages/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        {/* <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
