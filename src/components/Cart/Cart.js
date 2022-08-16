import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const {cartProducts, restarProducto, addNumber, removeItem} = useContext(CartContext)
        {cartProducts.map((product)=>{
            return (
    <div className='item-cart-product' key={product.id} >
        <img style={{height: 100}} src={`${product.imagen}`} alt="" />
        <div className='cart-product-details'>
        <span>{product.title}</span>         
        </div>
    <div className='cart-product-details'>
        <span>$ {product.price}</span>
        <button className='botonesDesplegable'onClick={() => restarProducto ()} >-</button>
        <span>{product.sumarYrestar}</span>
        <button className='botonesDesplegable'onClick={() => addNumber ()} >+</button>
        <button className='botonesDesplegable'onClick={() => removeItem (product.id)}> <DeleteIcon/></button>
    </div>
    </div>
    )
        
})}
}
export default Cart;