import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemList = ({dataProducto}) => {
    const {name, setName, handleClick} = useContext (CartContext)
    console.log("informacion desde contexto: ", useContext(CartContext))
        return (
            <>
                {dataProducto.map((producto) => {
                return <ItemProduct key={producto.id} data={producto}/>
            })}
            </>
        )
}

export default ItemList