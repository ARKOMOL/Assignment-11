import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const CarDetails = () => {
    const navigate = useNavigate()
const{ carId }= useParams()
const [carDetails,setCarDetails] = useState({});
const{_id,name,img,description,price,quantity, supplier} = carDetails;
useEffect(()=>{
    const url = `http://localhost:5000/inventory/${carId}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data =>setCarDetails(data))
})

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
    <button  >Delivered</button>
  </Card.Body>
</Card>
          
        </div>
        <button onClick={()=> navigate('/manageinven')}>Mange Inventory</button>
        </div>
    );
};

export default CarDetails;