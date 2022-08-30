import { useState, useContext} from 'react'
import './ItemCount.scss'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({cantidadSeleccionada, stock, productData}) => { 
  const{addProductToCart} = useContext (CartContext)
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
  addProductToCart({...productData, sumarYrestar})
cantidadSeleccionada (sumarYrestar)

}
    return (
    

        <div className='ItemCount'>
        <button className='botones' onClick={restarProducto}>-</button>
        <p> {sumarYrestar} </p>
        <button className='botones' onClick={addNumber}>+</button>
        <button className='botones' onClick={onAdd}>Añadir al Carrito</button>
        </div>

        )
}

export default ItemCount;