import React from "react";
import {  Routes, Route } from "react-router-dom";
// import {Shoes} from "./pages/Shoes";
// import { Cart } from "./pages/Cart";
// import { SingleShoe } from "./pages/SingleShoe";
import { Navbar} from "./components/Navbar";
import { Hero } from "./pages/Hero";

export const App:React.FC=()=>{

  return(
    <>
      <Navbar/>
      <Routes>
<Route path="/" element={<Hero/>} />
{/* <Route path="/products" element={<Shoes/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/products/:id" element={<SingleShoe/>}/> */}
      </Routes>
      
      </>
  )
}
