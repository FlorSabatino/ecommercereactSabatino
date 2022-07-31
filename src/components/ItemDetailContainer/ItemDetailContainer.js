import ItemDetail from "../ItemDetail/ItemDetail"
import Item from "../Item/Item"
import {useEffect } from "react"
import producto from "../Item/Item"
import { useParams, UseParams } from "react-router-dom"

const ItemDetailContainer = () => {
    console.log("productos desde detalle: ",producto)
    console.log("useParams:", useParams())
    const {id}= useParams()
    console.log("id de parametros", id)
    useEffect(()=>{
        producto.some( (producto)=> {
            if(producto.id === 2){
                return producto
            }
        }
        )
}, [])
    return (
        <div className="container-item-detail">
            <ItemDetail />
        </div>
    )

}

export default ItemDetailContainer