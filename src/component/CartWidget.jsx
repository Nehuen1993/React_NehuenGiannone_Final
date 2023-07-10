import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from 'react-icons/ri';
import { ComprarContext } from "../context/compra";
import { useContext } from 'react';







const CartWidget = () => {
  const {list, finCompra} = useContext(ComprarContext);
  return (
    <Button variant="dark">
        <RiShoppingCartLine className='iconoCarrito' /> 
       <NavLink  to="/carrito"> Carrito <Badge>({list.length}) </Badge> </NavLink>
    
    </Button>
   
  );
};

export default CartWidget;



