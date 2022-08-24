import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import './Cart.scss';

const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    const { cartProducts, removeItem, totalPrice } = useContext(CartContext)

    const [order, setOrder] = useState({
        item: cartProducts.map((product)=> {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        total:totalPrice
    })


    const [formData, setFormData] = useState ({
        name:'',
        phone:'',
        email:'',
        adress:'',
        cp:''
    }) 
   

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData ({...formData, [e.target.name] : e.target.value})
    }
    return (
        <>
                            {
                        showModal &&
                            <Modal title="Datos de contacto" close={() => setShowModal()}>
                                <form>
                                    <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                                    <p/>
                                    <input type='number' name='phone'placeholder='Telefono' onChange={handleChange} value={formData.phone}/>
                                    <p/>
                                    <input type='email' name='email' placeholder='Mail'onChange={handleChange} value={formData.email}/>
                                    <p/>
                                    <input type='text' name='adress' placeholder='Direccion'onChange={handleChange} value={formData.adress}/>
                                    <p/>
                                    <input type='text' name='city' placeholder='Ciudad'onChange={handleChange} value={formData.city}/>
                                    <p/>
                                    <input type='text' name='cp' placeholder='Codigo Postal'onChange={handleChange} value={formData.cp}/>
                                    <p/>
                                    <button>ENVIAR</button>
                                </form>
                            </Modal>
                    }
                    <div className='cart-page'>
                    <div className='checkout-container'>
                    {
                cartProducts.map((product) => {
                    return (
                        <>
                    <div className='checkout-page' key={product.id} >
                        <div>
                        <img style={{ height: 100 }} src={`${product.imagen}`} alt="" />
                    </div>
                        <div className='info-checkout'>
                            <span>{product.title}</span>
                        </div>
                        <div className='checkout-item'>
                            <span>$ {product.price}</span>
                            <button onClick={() => removeItem(product.id)}  > <DeleteIcon /></button>
                            </div>
                        </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
                <div className="info-subtotal">
                    <div className="total-purchase">
                        <h4>RESUMEN DE PEDIDO</h4>
                        <div className="item-purchase">
                            <p>SUBTOTAL</p>
                        <p>$ {totalPrice}</p>
                        </div>
                        <div className="item-purchase">
                            <p>ENVIO</p>
                                <div>
                                    {
                                    totalPrice > 5000 ? <span>GRATIS</span> : <span>$500</span>
}
                                </div>
                        </div>
                        <div className="item-purchase">
                            <p>TOTAL</p>
                            <div>
                                    {
                                    totalPrice > 5000 ? <span>$ {totalPrice}</span> : <span>$ {totalPrice + 500}</span>
}
                                </div>
                        </div>
                    </div>
                    <button onClick={() => setShowModal(true)}>IR A PAGAR</button>

                </div>
            </div>
        </>
    )
}
export default Cart;