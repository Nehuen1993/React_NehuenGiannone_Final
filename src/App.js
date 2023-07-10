import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import NavBar from './component/NavBar';
import ProductList, {  } from "./pages/home";
import DetalleProducto, {  } from "./pages/detalleproductos";
import ClaseMotor, {  } from "./pages/motor";
import ClaseSuspencion, {  } from "./pages/suspencion";
import ClaseFrenos, {  } from "./pages/frenos";
import {CarritoListContainer} from "./pages/carrito-list-container";
import ItemListContainer from './component/ItemListContainer';
import { RiMotorbikeFill } from "react-icons/ri";
import { ComprarProvider } from "./context/compra";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsk8_yDi3NqaXzJeGw6J9XmhVz_9KloAA",
  authDomain: "ecommer-react-coder.firebaseapp.com",
  projectId: "ecommer-react-coder",
  storageBucket: "ecommer-react-coder.appspot.com",
  messagingSenderId: "332807066692",
  appId: "1:332807066692:web:fca20041e3f1499aea1811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
  <ComprarProvider>  
    <BrowserRouter>
      
    <NavBar />
      <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/productos/:id" element={<DetalleProducto/>}/>
          <Route path="/frenos" element={<ClaseFrenos/>}/>
          <Route path="/motor" element={<ClaseMotor/>}/>
          <Route path="/suspencion" element={<ClaseSuspencion/>}/>
          <Route path="/carrito" element={<CarritoListContainer/>}/>
  
      </Routes>
      
    </BrowserRouter>
   </ComprarProvider>
   

  );
}

export default App;
