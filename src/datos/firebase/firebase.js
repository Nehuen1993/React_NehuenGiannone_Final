
import { arrayUnion, deleteDoc, updateDoc, addDoc, collection, getDocs, doc, getDoc,  getFirestore, where, query } from "firebase/firestore";



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
    const collectionRef = collection(db, "carrito", );
    const datosProductos = {...dato, cantidadCarrito:1};
    const response = await addDoc(collectionRef, datosProductos);

    console.log (response)
    
}

export {sumarCarrito}

const getOrden = async (orden, id, datos) => {
  const db = getFirestore();
  const collectionRef = collection(db, orden, id );
  const datosActualizados = {};
  Object.keys(datos).forEach((data) => {
    datosActualizados[data] = arrayUnion(...datos[data]);
  
  });
  await updateDoc(collectionRef, datosActualizados);

}

export {getOrden}

const getCarrito = async () => {
    const db = getFirestore();
    const docsRef = collection(db, "carrito", );
    const  snapshot = await getDocs(docsRef)

    const productos = [];
    snapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
    });
  
    return productos; 
      };

 export {getCarrito}

 const updateProducto = async (producto) => {
    const db = getFirestore();
    const docRef = doc(db, "items", producto.id);
    const cantidad = {...producto, cantidad: producto.cantidad -1}; 
    await updateDoc(docRef, cantidad);
 }
export {updateProducto}

const updateCantidadCarrito = async (producto, id) => {
  const db = getFirestore();
  const docRef = doc(db, "carrito", id);
  const cantidadCarrito = {...producto, cantidadCarrito:producto.cantidadCarrito +1}; 
  await updateDoc(docRef, cantidadCarrito);
}
export {updateCantidadCarrito}
const vaciarCarrito = async (carrito, id) => {   
    const db = getFirestore();
    const docsRef = collection(db, carrito, id);
    await deleteDoc(docsRef);
    }; 
export {vaciarCarrito}



const addCarrito = async (producto) => {
  const db = getFirestore();
  const nombreRef = collection(db, "carrito");
  const querySnapshot = await getDocs(query(nombreRef, where("nombre", "==", producto.nombre)));
  if (querySnapshot.empty){
  sumarCarrito(producto)

  }
  else {
  buscarID("carrito", producto.nombre, producto)
  
  console.log (producto.id)

 }
  }
   
export {addCarrito}

const buscarID = async (coleccion, nombre, producto) => {
  const db = getFirestore();
  const docRef = collection(db, coleccion);
  const consulta = query(docRef, where("nombre", '==', nombre));
  const documentosSnapshot = await getDocs(consulta);
    if (!documentosSnapshot.empty) {
      const primerDocumento = documentosSnapshot.docs[0];
      const idProducto = primerDocumento.id;
      console.log('El ID del producto es:', idProducto);
      updateCantidadCarrito(producto, idProducto);
      return idProducto;}}  
export {buscarID}