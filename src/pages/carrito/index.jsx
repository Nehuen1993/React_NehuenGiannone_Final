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
                <td>{producto.cantidadCarrito}</td>
                <td>{producto.precio}</td>
                <button onClick={() => vaciarCarrito("carrito", producto.id)} className="btn btn-dark">Eliminar del carrito</button>
                
              </tr>
              ))}
            </tbody>
          </table>
          </Table>
          
          <button onClick={() => finCompra( "orden", "fz6cGfiKFe2OIGxnwiQR", productos)} className="btn btn-primary">Comprar Productos</button>
          
    
          </>
    )
};

export {CarritoList};