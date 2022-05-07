import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInvenDetails = ({product,handleToDelete}) => {
    console.log(handleToDelete);
    const {name,img,description,price,quantity, supplier} =product;
    const navigate = useNavigate();
    return (
<div>
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
    <button  onClick={()=> handleToDelete}>Go Back</button>

  </Card.Body>
</Card>
        </div>



</div>
    );
};

export default ManageInvenDetails;