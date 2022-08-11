import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemProduct = ({data, action}) => {
  const {handleClick} = useContext (CartContext)
  
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
        <Button onClick={handleClick} className="BotonAgregar"variant="primary">Agregar al carrito</Button>
      </Card.Body>  
    </Card>
    
    </div>
    
  );
  }

export default ItemProduct;