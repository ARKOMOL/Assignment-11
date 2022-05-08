import React from 'react';
import { Card } from 'react-bootstrap';

const LatestDetails = ({latest}) => {
    // console.log(latest);
    const {img,origin,name,description} =latest;
    return (
        <div  className='mx-3 mx-auto my-3 ' >
              <div >
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
  <Card.Text>
    <p>{origin}</p>
    </Card.Text>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    <p>{description}</p>
    </Card.Text>
  
    
   
  </Card.Body>
</Card>
          
        </div>
        </div>
    );
};

export default LatestDetails;