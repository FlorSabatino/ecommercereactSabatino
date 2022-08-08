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
            <h5 class="card-title">{data.title}</h5>
            <p className="detail-info-precio"> $ {data.price}</p>
            <div className="detail-info-color">
                <button>Verde Militar</button> / <button>Manteca</button>
            </div>
            <span>Talles</span>
            <div className="datail-info-talles">
                <button>S</button>
                <button>M</button>
            </div>
            {console.log("cantidadSeleccionada: ", cantidadSeleccionada )}
            {
              cantidadSeleccionada < 1 ? <button><Link to="/cart">Terminar compra</Link></button> : <ItemCount cantidadSeleccionada={setcantidadSeleccionada}/> 
            }
          
          
            <p className="cardText"><small className="textMmuted">Cantidad disponible: {stock}</small></p>
        </div>
        </>
    );
}

export default ItemDetail