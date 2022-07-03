import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
// import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Checkout from "./component/Checkout";
import BlackFooter from "./component/BlackFooter";
import Header from './component/Header';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <BlackFooter />
    </>
  );
}

export default App;
