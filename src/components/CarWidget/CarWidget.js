import './CarWidget.scss';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';


const CarWidget = () => { 

    const {cartProducts, clear, sumarYrestar, restarProducto, addNumber, removeItem} = useContext(CartContext)
    {console.log ("cartProducts desde widget:", cartProducts)}


    return (
        <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ShoppingCartIcon/>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        {cartProducts.map((product)=>{
            return (
    <div className='item-cart-product' key={product.id}>
        <img style={{height: 70}} src={`${product.imagen}`} alt="" />
        <div className='cart-product-details'>
            <p>{product.title}</p>         
        </div>
        <div className='cart-product-details'>
            <p>$ {product.price}</p>
            <button onClick={() => restarProducto ()} >-</button>
            <span>{sumarYrestar}</span>
            <button onClick={() => addNumber ()} >+</button>
            <button onClick={() => removeItem}> <DeleteIcon/></button>
        </div>
        <button onClick={() => clear ()} ><DeleteForeverIcon/></button>
    </div>
)
            })}
        </Dropdown.Menu>
      </Dropdown>


</div>
    )
}

export default CarWidget;