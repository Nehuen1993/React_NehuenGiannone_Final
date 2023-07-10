import { useEffect, useState, useContext } from "react";
import { getProducto } from "../../datos/firebase/firebase";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ComprarContext } from "../../context/compra";




const DetalleProducto = ( {} ) => {
  const {id} = useParams ();
  const [producto, setProducto] = useState ({});
  const { addProducto } = useContext(ComprarContext);

  
  useEffect(() => {
    getProducto(id).then((producto) => {
      setProducto(producto);
    });
  }, []);

  if (!producto) return <p>Espere por favor</p>


return (
    <>
    <Card>
    <div className="card">
  <div className="card-header">
    {producto.nombre}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{producto.img}</li>
    <li className="list-group-item">Clase: {producto.clase}</li>
    <li className="list-group-item">Precio: ${producto.precio}</li>
    <li className="list-group-item">Cantidad: {producto.cantidad}</li>
    
  </ul>

<button onClick={() => addProducto(producto)} className="btn btn-primary">Agregar al carrito</button>
 
</div>
      </Card>
    </>
  );
};
export default DetalleProducto;
