import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({data}) => {
    const {id,title,imagen,price,stock} =data
    return (
        <>
        <div className="item-detail-image">
            <img src={`${data.imagen}`} alt="sweater verde militar"/>
        </div>
        <div className="item-detail-info">
            <span className="categoria">Mujer - Sweater</span>
            <p className="detail-info-precio"> $ {data.price}</p>
            <div className="detail-info-color">
                <button>Verde Militar</button> / <button>Manteca</button>
            </div>
            <span>Talles</span>
            <div className="datail-info-talles">
                <button>S</button>
                <button>M</button>
            </div>
          <ItemCount cantidad={stock}/> 
            <button>Añadir al Carrito</button>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Cantidad disponible: {stock}</small></p>
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default ItemDetail