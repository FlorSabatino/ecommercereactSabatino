import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const ItemDetail = ({data}) => {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState (1)
    const {id,title,imagen,price,stock} =data
    return (
        <>
        <div className="item-detail-image">
            <img src={`${data.imagen}`} alt="sweater verde militar"/>
        </div>
        <div className="item-detail-info">
            <span className="categoria">Mujer - Sweater</span>
            <h5 className="card-title">{data.title}</h5>
            <p className="detail-info-precio"> $ {data.price}</p>
                <button>Verde Militar</button> / <button>Manteca</button>

            <span>Talles</span>
            <div className="datail-info-talles">
                <button>S</button>
                <button>M</button>
            </div>
            {console.log("cantidadSeleccionada: ", cantidadSeleccionada )}
            {
                cantidadSeleccionada > 1 ? <button>Terminar compra</button> : <ItemCount cantidadSeleccionada={setcantidadSeleccionada}/> 
            }
               
          
          
            <p>Cantidad disponible: {stock}</p>
        </div>
        </>
    );
}

export default ItemDetail