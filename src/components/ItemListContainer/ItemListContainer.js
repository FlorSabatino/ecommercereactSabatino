import producto from "../Item/Item"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({section}) => {


        const [listaProducto, setlistaProducto] = useState ([])
        const getProducto = new Promise (( resolve, reject) => {
            setTimeout (() => {
                resolve (producto)
            },2000)
            
            })
            useEffect(() =>{
                getProducto
                .then ((res) => {
                    setlistaProducto (res)
    
                })
                .catch ((error) =>{
                    console.log ("la llamada fallo")
                })
    
                .finally (()=>{
    
                })
            
            }, [])



    return (
        <div className='ListaProductos'>
                    <h3>Productos</h3>
                    <ItemList dataProducto={listaProducto}/>
        </div>
    )
}
export default ItemListContainer