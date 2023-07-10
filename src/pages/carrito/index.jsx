import { Table } from 'react-bootstrap';
import { ComprarContext } from "../../context/compra";
import { useState, useEffect, useContext } from 'react';
import { getCarrito, vaciarCarrito } from "../../datos/firebase/firebase";


const CarritoList = () => {
  const [productos, setProductos] = useState([]);
  const { finCompra } = useContext(ComprarContext);

  useEffect(() => {
    getCarrito().then((productos) => {
      setProductos(productos);
    });
  
  }, []);
    return (
    
<>
     <Table>
        <h1>Productos en el carrito</h1>
           <table className="table" >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th> 
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                
                <tr key={producto.id}>
              
                <td>{producto.nombre}</td>
                <td>{1}</td>
                <td>{producto.precio}</td>
                
              </tr>
              ))}
            </tbody>
          </table>
          </Table>
          
          <button onClick={() => finCompra()} className="btn btn-primary">Comprar Productos</button>
          <button onClick={() => vaciarCarrito("carrito")} className="btn btn-dark">Vaciar carrito</button>
    
          </>
    )
};

export {CarritoList};