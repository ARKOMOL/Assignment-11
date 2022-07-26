import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = ({product,handleUpdate}) => {
    // console.log(product._id);
    const {_id,name,img,description,price,quantity, supplier} =product;
    const navigate = useNavigate();
    const navigateToCarDetails = id=>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div  >
     <Card className='bg-info my-3 mx-auto' style={{ width: '25rem',height:'35rem'}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    <p>{description}</p>
    </Card.Text>
    <Card.Text>
    <p>{_id}</p>
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
    <button className='btn btn-primary btn-block mb-4'  onClick={()=> navigateToCarDetails(_id)}>Update</button>
  </Card.Body>
</Card>
          
        </div>
    );
};

export default InventoryDetails;