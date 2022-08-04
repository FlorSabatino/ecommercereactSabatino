import './ItemDetail.scss'

const ItemDetail = ({data}) => {
    return (
        <>
        <div className="item-detail-image">
            <img src={`${data.imagen}`} alt="sweater verde militar"/>
        </div>
        <div className="item-detail-info">
            <span className="categoria">Mujer - Sweater</span>
            <h3>{data.title}</h3>
            <p className="detail-info-precio"> $ {data.price}</p>
            <div className="detail-info-color">
                <button>Verde Militar</button> / <button>Manteca</button>
            </div>
            <span>Talles</span>
            <div className="datail-info-talles">
                <button>S</button>
                <button>M</button>
            </div>
            <button>Añadir al Carrito</button>
        </div>
        </>
    )
}

export default ItemDetail