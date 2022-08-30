import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const ItemDetail = ({data}) => {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState (0)
    const {title,imagen,price,stock} =data
    return (
        <>
        <div className="item-detail-image">
            <img src={`${imagen}`} alt="sweater verde militar"/>
        </div>
        <div className="item-detail-info">
            <span className="categoria">Mujer - Sweater</span>
            <h5 className="card-title">{title}</h5>
            <p className="detail-info-precio"> $ {price}</p>
                <button className='botones'>Verde Militar</button> / <button className='botones'>Manteca</button>

            <p>Talles</p>
            <div className="botones">
                <button className='botones'>S</button>
                <button className='botones'>M</button>
            </div>
            {
                cantidadSeleccionada > 0 ? <Link to="/cart"><button>Terminar compra</button></Link> : <ItemCount stock={stock} cantidadSeleccionada={setcantidadSeleccionada} productData={data}/> 
            }
               
          
          
            <p>Cantidad disponible: {stock}</p>
        </div>
        </>
    );
}

export default ItemDetail