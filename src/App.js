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

import pic from './Images/icons8-jewelry-96.png';
import pic2 from './Images/icons8-jewel-32.png';
import pic3 from './Images/icons8-home-32.png';
import pic4 from './Images/icons8-shopping-cart-32.png';

import { useSelector } from "react-redux";
import { getTotalQuantity } from "./redux/cartSlice";


function App() {

  const totQuantity = useSelector(getTotalQuantity);

  return (
    <Router>
      <nav>
        <Link to="/" className="navLink one"><img src={pic} className="logoImg" alt="jewelry logo" /> JewelMyLove</Link>
        <Link to="/" className="navLink"><img src={pic3} className="navsImg" alt="jewelry logo" /> Home</Link>
        <Link to="/jewellery" className="navLink"><img src={pic2} className="navsImg" alt="jewelry logo" /> Jewelry</Link>
        <Link to="/cart" className="navLink two"><img src={pic4} className="navsImg" alt="jewelry logo" /> Cart <span className="badgy">{totQuantity}</span></Link>
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
