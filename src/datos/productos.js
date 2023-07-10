
import  productos  from "./productos.json";
import foto1   from "../component/imagenes/aceiteMotor.jpg";


export const getProductos = () => {
    return new Promise((resolve, reject) => {
        resolve (productos);
    });
};

export const getProducto = (id) => {
    return new Promise((resolve, reject) => {
        resolve (productos.find((producto) => producto.id === id));
    });
};


export   const getClase = async (clase) => {
    return new Promise((resolve, reject) => {
        if (clase) {
            resolve (productos.filter((productos) => productos.clase === clase));
        } else {
            resolve (productos)
        }      
    });
};


