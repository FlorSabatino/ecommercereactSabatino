import './CarWidget.scss';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const CarWidget = () => { 

    const {cartProducts, clear} = useContext(CartContext)
    {console.log ("cartProducts desde widget:", cartProducts)}
    {cartProducts.map((product)=>{
        
    })}
    return (
        <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ShoppingCartIcon/>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>

    <div className='item-cart-product' key={product.id}>
        <img src={`/assets/${product.image}`} alt="" />
        <div className='cart-product-details'>
            <p>{product.title}</p>         
        </div>
        <div className='cart-product-details'>
            <p>$ {product.price}</p>
            <DeleteForeverIcon/>
        </div>
    </div>
)
        </Dropdown.Menu>
      </Dropdown>

<button onClick={() => clear ()} >Borrar Todo</button>
</div>
    )
}

export default CarWidget;