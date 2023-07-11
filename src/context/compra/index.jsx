import { createContext, useState } from "react";  
import { addCarrito,  updateProducto, getOrden} from "../../datos/firebase/firebase";


const ComprarContext = createContext();

const ComprarProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const addProducto = (producto) => {
        setList([...list, producto]);
        addCarrito(producto);
        updateProducto (producto);
    }

    const finCompra = (productos) => {
        getOrden(productos);
        
        alert("Compra finalizada");

    }

    return (
        <ComprarContext.Provider value= {{list, addProducto, finCompra}}>
            {children}
        </ComprarContext.Provider>
)}

export { ComprarContext, ComprarProvider };