import ItemDetail from "../ItemDetail/ItemDetail"
import {useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import db from "../../firebaseConfig"
import {doc, getDoc} from "firebase/firestore"



const ItemDetailContainer = () => {
    const [productoData, setProductoData] = useState ({})
    const {id}= useParams()

    useEffect(()=>{
        getProducto()
        .then ((res) => {
            setProductoData(res)
        })

}, [id])


    const getProducto = async () => {
        const docRef = doc (db, 'productos', id )
        const docSnapshot = await getDoc (docRef)
        let product = docSnapshot.data ()
        product.id = docSnapshot.id
        return product
    }
    return (
        <div className="container-item-detail">
            <ItemDetail data={productoData}/>
        </div>
    )

}

export default ItemDetailContainer