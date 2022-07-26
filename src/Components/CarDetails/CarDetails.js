import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ReStock from './ReStock';


const CarDetails = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState('');
const{ carId }= useParams()
const [carDetails,setCarDetails] = useState({});
const{_id,name,img,description,price,quantity, supplier} = carDetails;
useEffect(()=>{
    // const url = `http://localhost:5000/inventory/${carId}`;
    const url = `https://stormy-springs-20061.herokuapp.com/inventory/${carId}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data =>setCarDetails(data))
},[carId,carDetails])



const handleToDelivered =(e)=>{
    const restQuantity = parseInt(carDetails.quantity);
    const leftQuantity = restQuantity-1;
    // const url = `http://localhost:5000/inventory/${carId}`;
    const url = `https://stormy-springs-20061.herokuapp.com/inventory/${carId}`
    fetch(url,{
        method:'PUT',
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({quantity:leftQuantity})
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
    
}

const handleStock = (e) => {
   
    e.preventDefault();
    setNumber( e.target.number.value)
   
      const updateQuantity = parseInt(carDetails?.quantity) + parseInt(number);
   

      // const url = `http://localhost:5000/inventory/${carId}`;
      const url = `https://stormy-springs-20061.herokuapp.com/inventory/${carId}`
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({quantity: updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data)
     
        );
        setNumber('')
  };


    return (
 <div>
<div className='container my-4 flex d-flex justify-content-center '>
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
    <button className='btn btn-primary my-2 ' onClick={ handleToDelivered}  >Delivered</button>
{/* <ReStock/> */}
<div>
<form onSubmit={handleStock}>
            <div className="form-outline mb-4">
              <input
                type="number"
                id="number"
                name='number'
                className="form-control"
                placeholder="Type number"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Add Stock
            </button>
          </form>
</div>


  </Card.Body>
</Card>
          
        </div>
        <button className='btn btn-primary btn-block mb-4' onClick={()=> navigate('/manageinven')}>Manage Inventory</button>
        </div>
    );
};

export default CarDetails;