import { useState} from 'react'
import './ItemCount.scss'


const ItemCount = ({cantidadSeleccionada}) => { 
const   [sumarYrestar, setsumarYrestar] = useState (1)

const addNumber = () => {
    setsumarYrestar (sumarYrestar+1)
    
  }
  const restarProducto = () => {
    setsumarYrestar (sumarYrestar-1)

  }

const onAdd = () => {
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

export default ItemCount;