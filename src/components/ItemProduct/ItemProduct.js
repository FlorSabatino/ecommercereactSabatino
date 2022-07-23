import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';


const ItemProduct = ({data, action}) => {
  const {title,imagen,price,stock} =data
  return (
    <div className='item-product'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imagen} />
      <Card.Body >
        <Card.Title>$ {price}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <ItemCount/>
        <Card.Text>
          Cantidad disponible: {stock}
        </Card.Text>
                <Button onClick={action} className="BotonAgregar"variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>

    </div>
  );
  }

export default ItemProduct;