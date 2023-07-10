import { CarritoList } from "../../component/carrito-list";
import { useEffect, useState } from "react";
import { getProductos } from "../../datos/productos";

const CarritoListContainer = () => {
  // const [prodtuctos, setProdtuctos] = useState([]);

  // useEffect(() => {
  //   getProductos().then((data) => {
  //     setProdtuctos(data);     
  //   })
  // }, []);

  return (
      <div>
        <h1>Productos en el carrito</h1>
          <CarritoList productos={[
                {
                  id: "10",
                  nombre: "Discos de freno",
                  clase: "frenos",
                  cantidad: 5 ,
                  precio: 300,
                  img: "../component/imagenes/discosDeFreno.jpeg"
              },
              {
                id: "10",
                nombre: "Discos de freno",
                clase: "frenos",
                cantidad: 5 ,
                precio: 300,
                img: "../component/imagenes/discosDeFreno.jpeg"
            },
              {
                  id: "11",
                  nombre: "Pastilla de freno",
                  clase: "frenos",
                  cantidad: 5 ,
                  precio: 200,
                  img: "./component/imagenes/pastillasDeFrenos.jpg"
              },]}/>  

         
      </div>
  )
};

export { CarritoListContainer };
