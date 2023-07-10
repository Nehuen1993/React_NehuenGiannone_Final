import {ProductosCarrito} from "../carrito"; 

const CarritoList = ({ productos }) => {
  return (
    <div>
      <hr />
      {productos.map((producto) => {
        return <ProductosCarrito key={producto.id} data={producto} />;
      
      })} 
    </div>
  );
};

export {CarritoList}