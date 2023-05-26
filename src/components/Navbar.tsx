import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Navbar:React.FC = () => {
  return (
    <nav>
        <ul>
             <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/products">
            <li>Shop</li>
            </NavLink>
        </ul>
        <h1>TRENDS</h1>
        <ul>
            <li>Login</li>
           <NavLink to="/cart">
            <li>Cart</li>
            </NavLink>
        </ul>
    </nav>
  )
}
