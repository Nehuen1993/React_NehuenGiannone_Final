import { Table } from 'react-bootstrap';
import { Link, useParams} from "react-router-dom";
import { ComprarContext } from "../../context/compra";
import { useContext } from 'react';

const ProductosCarrito = ({ data }) => {
    const {list, finCompra} = useContext(ComprarContext);
    return (
    
<>
     <Table>
           <table className="table" >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th> 
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.nombre}</td>
                <td>{data.cantidad}</td>
                <td>{data.precio}</td>
              </tr>
            </tbody>
          </table>
          </Table>
          
          <button onClick={() => finCompra()} className="btn btn-primary">Comprar Productos</button>
    
          </>
    )
};

export {ProductosCarrito};