import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
const InventoryDetails = ({product,handleUpdate}) => {
    // console.log(product._id);
    const {_id,name,img,description,price,quantity, supplier} =product;
    const navigate = useNavigate();
    const navigateToCarDetails = id=>{
        navigate(`/inventory/${id}`)
    }
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[]);
    return (
        <div  data-aos="fade-up"
        data-aos-anchor-placement="center-center" >
     <Card className='bg-info b-0 my-3 mx-auto' style={{ width: '25rem',height:'35rem'}}>
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