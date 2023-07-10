
import { deleteDoc, updateDoc, addDoc, collection, getDocs, doc, getDoc,  getFirestore, where, query } from "firebase/firestore";



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

const sumarCarrito = async (dato) => {
    const db = getFirestore();
    const collectionRef = collection(db, "carrito");
    const response = await addDoc(collectionRef, dato);

    console.log (response)
    
}

export {sumarCarrito}

const getCarrito = async () => {
    const db = getFirestore();
    const docsRef = collection(db, "carrito");
    const  snapshot = await getDocs(docsRef)

    const productos = [];
    snapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
    });
  
    return productos; 
      };

 export {getCarrito}

 const updateProducto = async (id, dato) => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    await updateDoc(docRef, dato);
 }
export {updateProducto}

const vaciarCarrito = async () => {   
    const db = getFirestore();
    const docsRef = collection(db, "carrito");
    const querySnapshot = await getDocs(docsRef);
  
    window.location.reload()
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    }); 
    await deleteDoc(collection(db, docsRef).parent);
    
}
export {vaciarCarrito}

