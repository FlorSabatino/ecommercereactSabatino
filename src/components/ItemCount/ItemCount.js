import { useState } from 'react';
import './ItemCount.scss'

const   [sumarYrestar, setsumarYrestar] = useState (1)

const addNumber = () => {
    setsumarYrestar (sumarYrestar+1)
    
  }
  const restarProducto = () => {
    setsumarYrestar (sumarYrestar-1)
  }

const ItemCount = () => { 
    return (
    

        <div className='ItemCount'>
        <button onClick={restarProducto}>-</button>
        <p>{sumarYrestar}</p>
        <button onClick={addNumber}>+</button>
        </div>

        )
}

export default ItemCount;