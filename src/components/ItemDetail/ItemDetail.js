import './ItemDetail.scss'

const ItemDetail = () => {
    return (
        <>
        <div className="item-detail-image">
            <img src="/assets/img_0302i.png" alt="sweater verde militar"/>
        </div>
        <div className="item-detail-info">
            <span className="categoria">Mujer - Sweater</span>
            <h3>Sweater manga ancha</h3>
            <p className="detail-info-precio"> $ 3000</p>
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