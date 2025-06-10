import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Cart from './Components/Cart/Cart';
import Jewellery from "./Jewellery";
import Home from "./Home";

import pic from './Images/icons8-necklace-100b.png';
import pic4 from './Images/icons8-bag-100.png';

import { useSelector } from "react-redux";
import { getTotalQuantity } from "./redux/cartSlice";


function App() {

  const totQuantity = useSelector(getTotalQuantity);

  return (
    <Router>
      <nav>
        <Link to="/" className="navLink one"><img src={pic} className="logoImg" alt="jewelry logo" /> <span className="logoText">JewelMyLove</span></Link>
        <Link to="/" className="navLink second">About</Link>
        <Link to="/jewellery" className="navLink second">Jewelry</Link>
        <Link to="/cart" className="navLink two"><img src={pic4} className="navsImgCart" alt="jewelry logo" /><span className="badgy">{totQuantity}</span></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
