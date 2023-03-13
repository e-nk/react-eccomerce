import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "../pages/Home";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";


function Navbar(){


    return(
        <Router>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 fs-5">
        <li className="logo nav-header link-dark">
              <Link to="/">Home</Link>
            </li>
            
          <li class="nav-item ms-3 fs-5 link-dark">
              <Link to="/products">Products</Link>
            </li>
            <li class="nav-item ms-3 fs-5 link-dark">
              <Link to="/cart">Cart
              </Link>
            </li>
            <li class="nav-item ms-3 fs-5 link-dark">
              <Link to="/wish">Wishlist
              </Link>
            </li>
                  
            

        </ul>
        </div>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              
              
  
        </Routes>

        </Router>
    )
}

export default Navbar;