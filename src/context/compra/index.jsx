import { createContext, useState } from "react";  


const ComprarContext = createContext();

const ComprarProvider = ({ children }) => {

    const [list, setList] = useState([]);
    const addProducto = (producto) => {
    
        setList([...list, producto]);
    }

    const finCompra = () => {
        console.log ("Compra finalizada");
    }

    return (
        <ComprarContext.Provider value= {{list, addProducto, finCompra}}>
            {children} Provider
        </ComprarContext.Provider>
)}

export { ComprarContext, ComprarProvider };