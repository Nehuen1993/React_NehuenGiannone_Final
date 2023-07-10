import React from 'react'
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget';
import logo from './logo.png';



const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        
        <img src={logo} height="40px" width="40px"></img>
        <NavLink className="btn btn-outline-success me-2" to="/">Home</NavLink>
        <NavLink className="btn btn-outline-success me-2" to="/suspencion">Suspencion</NavLink>
        <NavLink className="btn btn-outline-success me-2" to="/motor">Motor</NavLink>
        <NavLink className="btn btn-outline-success me-2" to="/frenos">Frenos</NavLink>
        
        <CartWidget to= "/carrito"/>
      </form>
    
    </nav>

    

)
}

export default NavBar