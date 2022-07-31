import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'


const ItemProduct = ({data, action}) => {
  const {id,title,imagen,price,stock} =data
  return (
    <div className='item-product'>
    <Link to={`/productos/${id}`}>
     <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imagen} />
      <Card.Body >
        <Card.Title>$ {price}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <ItemCount cantidad={stock}/> 
        <Card.Text>
          Cantidad disponible: {stock}
        </Card.Text>
                <Button onClick={action} className="BotonAgregar"variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
    
  );
  }

export default ItemProduct;