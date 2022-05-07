import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = ({product,handleUpdate}) => {
    // console.log(product);
    const {name,img,description,price,quantity, supplier} =product;
    const navigate = useNavigate();
    return (
        <div >
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}e</Card.Title>
    <Card.Text>
    <p>{description}</p>
    </Card.Text>
    <Card.Text>
    <p>{price}</p>
    </Card.Text>
    <Card.Text>
    <p>{quantity}</p>
    </Card.Text>
    <Card.Text>
    <p>{supplier}</p>
    </Card.Text>
    <button to='/blogs' onClick={handleUpdate}>Update</button>
  </Card.Body>
</Card>
          
        </div>
    );
};

export default InventoryDetails;