import producto from "../Item/Item"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({section}) => {


        const [listaProducto, setlistaProducto] = useState ([])
        const {idCategory} = useParams ();
        const getProducto = new Promise (( resolve, reject) => {
            setTimeout (() => {
                if(idCategory){
                    resolve (producto.filter((prod) =>{
                        return prod.categoria === idCategory

                    }))
                }
               else {
                resolve(producto)
            }
            },1000)
            
            })
            useEffect(() =>{
                getProducto
                .then ((res) => {
                    setlistaProducto (res)
    
                })
                .catch ((error) =>{
                })
    
                .finally (()=>{
    
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