import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';
import {Link} from 'react-router-dom'


const ItemProduct = ({data, action}) => {
  const {id,title,imagen,price} =data
  return (
    <div className='item-product'>
    
     <Card  style={{ width: '18rem' }}>
      <Card.Body >
      <Link to={`/productos/${id}`}>
      <Card.Img variant="top" src= {imagen} />
        <Card.Title>$ {price}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        </Link>
        <Button onClick={action} className="BotonAgregar"variant="primary">Agregar al carrito</Button>
      </Card.Body>  
    </Card>
    
    </div>
    
  );
  }

export default ItemProduct;