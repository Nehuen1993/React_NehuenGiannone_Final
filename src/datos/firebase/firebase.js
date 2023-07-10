
import { collection, getDocs, doc, getDoc,  getFirestore, where, query } from "firebase/firestore";



const getProducto = async (id) => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    const  snapshot = await getDoc(docRef)

   if (snapshot.exists()) {
       return {id: snapshot.id, ...snapshot.data()};
      }
 };

export {getProducto}

const getProductos = async () => {
    const db = getFirestore();
    const docsRef = collection(db, "items");
    const  snapshot = await getDocs(docsRef)

    const productos = [];
    snapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
  
    return productos; 
      };

 export {getProductos}

 const getClase = async (clase) => {
    const db = getFirestore();
    const docsRef = collection(db, "items");
    const querySnapshot = await getDocs(query(docsRef, where("clase", "==", clase)));

    const productos = [];
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
  
    return productos; 
      };

 export {getClase}

// export   const getClase = async (clase) => {
//     return new Promise((resolve, reject) => {
//         if (clase) {
//             resolve (productos.filter((productos) => productos.clase === clase));
//         } else {
//             resolve (productos)
//         }      
//     });
// };
