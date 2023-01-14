import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";
import { addDoc,collection, getDocs, getFirestore, query, where,limit } from "firebase/firestore";

const ItemListContainer = () => {
    const [item, setItems] = useState({});
    const {id} = useParams();

    // Promesa que accede a una JSON con un Array de Objetos
    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);
        });
        promesa.then((data) => {
            setItem(data);
        })
    }, [id]); */

    // Consultar a Firestore por un ID
   /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("Error! No se encontró el Documento!");
            }
        });
    }, []); */

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const q = query(itemsCollection, where ("categoria", "==", "Camshafts"), limit(2)) // filtro por condicion
        const q = id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;
        getDocs(q).thenthen((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));

        });

    },[id]);
    

    return (
        <div className="container">
            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer;
