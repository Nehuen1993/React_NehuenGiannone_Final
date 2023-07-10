import { createContext, useState } from "react";  
import { sumarCarrito, updateProducto, sumarCantidad} from "../../datos/firebase/firebase";


const ComprarContext = createContext();

const ComprarProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const addProducto = (producto) => {
        setList([...list, producto]);
        sumarCarrito(producto);
        updateProducto (producto);

        
    }

    const finCompra = () => {
        
        alert("Compra finalizada");

    }

    return (
        <ComprarContext.Provider value= {{list, addProducto, finCompra}}>
            {children}
        </ComprarContext.Provider>
)}

export { ComprarContext, ComprarProvider };