import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import './Cart.scss';
import db from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    const { cartProducts, removeItem, totalPrice } = useContext(CartContext)
    const [success, setSuccess] = useState ()

    const [order, setOrder] = useState({
        item: cartProducts.map((product)=> {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        date: new Date ().toLocaleString (),
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
        setFormData ({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault ()
        pushData ({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectioOrder = collection (db, 'ordenes')
        const orderDoc = await addDoc (collectioOrder, newOrder)
        setSuccess(orderDoc.id)

    }
    return (
        <>
                            {
                        showModal &&
                            <Modal title="Datos de contacto" close={() => setShowModal()}>
                                {success ? (
                                <>
                                <h4>Tu pedido fue procesado correctamente</h4>
                                <p>ID de Compra: {success}</p>
                                </>
                                ) : (
                                <form onSubmit={submitData}>
                                    <span>Nombre Completo: </span>
                                    <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                                    <p/>
                                    <span>Telefono: </span>
                                    <input type='number' name='phone'placeholder='Telefono' onChange={handleChange} value={formData.phone}/>
                                    <p/>
                                    <span>Email: </span>
                                    <input type='email' name='email' placeholder='Mail'onChange={handleChange} value={formData.email}/>
                                    <p/>
                                    <span>Direccion de envio: </span>
                                    <input type='text' name='adress' placeholder='Direccion'onChange={handleChange} value={formData.adress}/>
                                    <p/>
                                    <span>Ciudad: </span>
                                    <input type='text' name='city' placeholder='Ciudad'onChange={handleChange} value={formData.city}/>
                                    <p/>
                                    <span>Codigo Postal: </span>
                                    <input type='number' name='cp' placeholder='Ingresa tu CP'onChange={handleChange} value={formData.cp}/>
                                    <p/>
                                    <button type='submit'>ENVIAR</button>
                                </form>
                                )}
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