import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';
import useProducts from '../../Hooks/useProducts';
import InventoryDetails from './InventoryDetails';
import ManageInven from './ManageInven/ManageInven';


const Inventory = () => {
    const [products,setProducts] = useProducts([]);
    // console.log(products);
 const navigate = useNavigate()
    
const handleUpdate =()=>{
    console.log('working update');
}
    return (
        <div className='container mx-auto '>
          
          <h1 className='mt-3' >
                Our Items 
            </h1>
                
              <div className='inventory'>
              {
                       products?.slice(0,6).map(product =>(<InventoryDetails key={product._id} product={product} handleUpdate={handleUpdate}></InventoryDetails>))
                    }
              </div>
        
               
        
      
           
<button className='btn btn-info btn-block mb-4' onClick={()=> navigate('/manageinven')}>Mange Inventory</button>
        </div>
    );
};

export default Inventory;