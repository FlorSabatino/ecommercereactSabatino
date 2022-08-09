import './ItemCount.scss'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCount = ({setQuantitySelected, productData}) => {
    const { addProductToCart } = useContext(CartContext)

const ItemCount = ({cantidadSeleccionada, stock}) => { 
const   [sumarYrestar, setsumarYrestar] = useState (1)

const addNumber = () => {
  if(sumarYrestar < stock ) {
    setsumarYrestar (sumarYrestar+1)
    
  }
  }
 
  const restarProducto = () => {
    if (sumarYrestar > 1){
    setsumarYrestar (sumarYrestar-1)
    }
  }

const onAdd = () => {
  console.log("Agregar al carrito: ", productData)
  addProductToCart(productData)
cantidadSeleccionada (sumarYrestar)

}
    return (
    

        <div className='ItemCount'>
        <button onClick={restarProducto}>-</button>
        <p>{sumarYrestar}</p>
        <button onClick={addNumber}>+</button>
        <button onClick={onAdd}>Añadir al Carrito</button>
        </div>

        )
}
}

export default ItemCount