import { useState } from 'react';
import './ItemCount.scss'


const ItemCount = ({cantidad}) => { 
const   [sumarYrestar, setsumarYrestar] = useState (1)

const addNumber = () => {

  if(sumarYrestar < cantidad) {
    setsumarYrestar (sumarYrestar+1)
    
  }
  }
  const restarProducto = () => {
  if (sumarYrestar >1)
    setsumarYrestar (sumarYrestar-1)

  }


    return (
    

        <div className='ItemCount'>
        <button onClick={restarProducto}>-</button>
        <p>{sumarYrestar}</p>
        <button onClick={addNumber}>+</button>
        </div>

        )
}

export default ItemCount;