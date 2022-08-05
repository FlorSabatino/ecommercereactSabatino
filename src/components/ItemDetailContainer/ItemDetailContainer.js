import ItemDetail from "../ItemDetail/ItemDetail"
import {useEffect, useState } from "react"
import producto from "../Item/Item"
import { useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [productoData, setProductoData] = useState ({})
    const {id}= useParams()

    useEffect(()=>{
        filterById()

}, [])

    const filterById = () => {
        producto.some( (producto)=> {
            if(producto.id === id){
                setProductoData(producto)

            }
        }
        )
    }
    return (
        <div className="container-item-detail">
            <ItemDetail data={productoData}/>
        </div>
    )

}

export default ItemDetailContainer