import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import './Cart.scss';

const Cart = () => {
    const [showModal, setShowModal] = useState(false)


    const [formData, setFormData] = useState ({
        name:'',
        phone:'',
        email:''
    }) 
    const { cartProducts, restarProducto, addNumber, removeItem } = useContext(CartContext)

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData ({ [e.target.name] : e.target.value})
    }
    return (
        <>

            {
                cartProducts.map((product) => {
                    return (
                        <>
                    <div className='checkout-page' key={product.id} >
                        <img style={{ height: 100 }} src={`${product.imagen}`} alt="" />
                        <div className='info-checkout'>
                            <span>{product.title}</span>
                        </div>
                        <div className='checkout-item'>
                            <span>$ {product.price}</span>
                            <button onClick={() => restarProducto()} >-</button>
                            <span>{product.sumarYrestar}</span>
                            <button onClick={() => addNumber()} >+</button>
                            <button onClick={() => removeItem(product.id)}  > <DeleteIcon /></button>
                        </div>
                        </div>
                        
                    
                     
                <div className="info-subtotal">
                    <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
                    <div className="total-purchase">
                        <h4>RESUMEN DE PEDIDO</h4>
                        <div className="item-purchase">
                            <p>2 PRODUCTOS</p>
                            <p>$ 5.000</p>
                        </div>
                        <div className="item-purchase">
                            <p>ENTREGA</p>
                            <p>GRATIS</p>
                        </div>
                        <div className="item-purchase">
                            <p>TOTAL</p>
                            <p>$ 5.000</p>
                        </div>
                    </div>
                    {
                        showModal &&
                            <Modal title="Datos de contacto" close={() => setShowModal()}>
                                <form>
                                    <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                                    <input type='number' name='phone'placeholder='Telefono' onChange={handleChange} value={formData.phone}/>
                                    <input type='email' name='email' placeholder='Mail'onChange={handleChange} value={formData.email}/>
                                    <button>ENVIAR</button>
                                </form>
                            </Modal>
                    }
                </div>
                </> 
)  
}
                
                
            )
        }
        </>
    )
}
export default Cart;