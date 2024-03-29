import './CarWidget.scss';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';


const CarWidget = () => { 

    const {cartProducts, clear, removeItem} = useContext(CartContext)

    return (
        <div>
            
        <Dropdown className='ocultarCarrito'>

        <Dropdown.Toggle variant="success" id="dropdown-basic">
        {cartProducts.length !== 0 && <span>{cartProducts.length}</span>}
        <ShoppingCartIcon/>
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
            
        {cartProducts.map((product)=>{
            return (
    <div className='item-cart-product' key={product.id} >
        <img style={{height: 70}} src={`${product.imagen}`} alt="" />
        <div className='cart-product-details'>
            <span>{product.title}</span>         
        
        <div className='cart-product-details'>
            <span>$ {product.price} </span>
            <p>Cantidad: {product.sumarYrestar}</p>
            <button className='botonesDesplegable'onClick={() => removeItem (product.id)}> <DeleteIcon/></button>
            </div>
        </div>
        
    </div>
)
            })}
            <button className='botonesDesplegable' onClick={() => clear ()} ><DeleteForeverIcon/>Vaciar carrito</button>
        </Dropdown.Menu>
        
      </Dropdown>


</div>
    )
}

export default CarWidget;