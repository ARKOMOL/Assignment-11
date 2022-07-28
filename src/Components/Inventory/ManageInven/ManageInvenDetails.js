import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import del from '../../../img/delete.png'
import { useEffect } from 'react';
const ManageInvenDetails = ({product,handleToDelete}) => {
        const {name,img,description,price,quantity, supplier} =product;
    
        useEffect(()=>{
          Aos.init({duration: 2000});
        },[]);
    return (
<div>
<div  data-aos="fade-up" >
     <Card className='mx-auto  my-3 bg-info' style={{ width: '25rem',height:'35rem' }}>
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
 
    <img className='w-25' src={del} onClick={()=> handleToDelete(product._id)} alt="" />

  </Card.Body>
</Card>
        </div>



</div>
    );
};

export default ManageInvenDetails;