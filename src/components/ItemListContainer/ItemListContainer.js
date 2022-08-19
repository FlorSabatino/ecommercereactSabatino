import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"



const ItemListContainer = ({section}) => {


        const [listaProducto, setlistaProducto] = useState ([])
        const {idCategory} = useParams ();


const getProducto = async () => {
    const productCollection = collection (db, 'productos') 
    const productSnapshot = await getDocs(productCollection)
    const productList = productSnapshot.docs.map( (doc) => {
        let product = doc.data ()
        product.id = doc.id
        return product

    }) 

return productList
}

            useEffect(() =>{
                getProducto ()
                .then((res) => {
                    setlistaProducto (res)
                })

            
            }, [idCategory])



    return (
        <div className='ListaProductos'>
                    <h3>Productos</h3>
                    <ItemList dataProducto={listaProducto}/>
        </div>
    )
}
export default ItemListContainer