import { createContext, useState } from "react";  
import { sumarCarrito } from "../../datos/firebase/firebase";


const ComprarContext = createContext();

const ComprarProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const addProducto = (producto) => {
        setList([...list, producto]);
        console.log (producto);
        sumarCarrito(producto);
    }

    const finCompra = () => {
        
        alert("Compra finalizada");
        console.log ("Compra finalizada");
    }

    return (
        <ComprarContext.Provider value= {{list, addProducto, finCompra}}>
            {children}
        </ComprarContext.Provider>
)}

export { ComprarContext, ComprarProvider };