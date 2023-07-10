
import { collection, getDocs, doc, getDoc,  getFirestore } from "firebase/firestore";
import { setPriority } from "os";
import { getProductos } from "../productos";




//  useEffect (() => {
//    const db = getFirestore();
//    const itemsColection = collection(db, "productos");
//    getDocs(itemsColection).then((response) => {
//      setProductos(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//    })
      
//    })
// [];

 




// export const getProducto = (id) => {
//     return new Promise((resolve, reject) => {
//         resolve (productos.find((producto) => producto.id === id));
//     });
// };


// export   const getClase = async (clase) => {
//     return new Promise((resolve, reject) => {
//         if (clase) {
//             resolve (productos.filter((productos) => productos.clase === clase));
//         } else {
//             resolve (productos)
//         }      
//     });
// };
