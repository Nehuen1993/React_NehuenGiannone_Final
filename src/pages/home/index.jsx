import React, { useEffect, useState } from "react";
import { getProductos } from "../../datos/productos";
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import foto1   from "../../component/imagenes/aceiteMotor.jpg";




const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((productos) => {
      setProductos(productos);
    });
  
  }, []);
  return (
    <>
    <Table>
      <h1>Lista de repuestos</h1>

      <table className="table" >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
                 <td>
                 <Link to={`/productos/${producto.id}`}>
                 {producto.nombre}
                 </Link>
                 </td>
              <td>
                <img src={foto1} alt={`Imagen ${producto.id + 1}`} />
              </td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Table>
    </>
  );
};

export default ProductList;

