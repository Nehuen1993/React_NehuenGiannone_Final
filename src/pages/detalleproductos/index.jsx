import { useEffect, useState, useContext } from "react";
import { getProducto } from "../../datos/firebase/firebase";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ComprarContext } from "../../context/compra";
import { NavLink } from "react-router-dom";





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

  const agregarOn = producto.cantidad > 0;
  const agregarOff = producto.cantidad === 0;


return (
    <>
    <Card>
    <div className="card">
  <div className="card-header">
   <h1> {producto.nombre}</h1>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{producto.img}</li>
    <li className="list-group-item">Clase: {producto.clase}</li>
    <li className="list-group-item">Precio: ${producto.precio}</li>
    <li className="list-group-item">Cantidad: {producto.cantidad}</li>
    
  </ul>
</div>

</Card>
{agregarOn && (
<button onClick={() => addProducto(producto)} className="btn btn-primary">Agregar al carrito</button>
 )}
 {agregarOff && (
<button className="btn btn-secondary">Producto sin Stock</button>

 )}
    </>
  );
};
export default DetalleProducto;
