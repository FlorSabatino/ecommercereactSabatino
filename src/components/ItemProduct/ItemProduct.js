import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemProduct.scss';
import { useState } from 'react';


const ItemProduct = (props) => { 
  const   [sumarYrestar, setsumarYrestar] = useState (1)

  const addNumber = () => {
    setsumarYrestar (sumarYrestar+1)
    
  }
  const restarProducto = () => {
    setsumarYrestar (sumarYrestar-1)
  }

  return (
    <div className='item-product'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image} />
      <Card.Body >
        <Card.Title>$ {props.price}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
        <div className='ItemCount'>
        <button onClick={restarProducto}>-</button>
        <p>{sumarYrestar}</p>
        <button onClick={addNumber}>+</button>
        </div>
                <Button className="BotonAgregar"variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default ItemProduct;