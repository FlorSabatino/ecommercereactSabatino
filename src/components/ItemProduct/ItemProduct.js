import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';

const ItemProduct = (props) => { 
    console.log ("propiedades", props.price, props.title, props.image)
  return (
    <div className='item-product'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>$ {props.price}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemProduct;