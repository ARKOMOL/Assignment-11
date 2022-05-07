import React from 'react';

import useProducts from '../../Hooks/useProducts';
import InventoryDetails from './InventoryDetails';


const Inventory = () => {
    const [products,setProducts] = useProducts([]);

    
const handleUpdate =()=>{
    console.log('working update');
}
    return (
        <div className='container bg-dark d-flex'>
          
         
                
                {
                       products?.slice(0,6).map(product =>(<InventoryDetails key={product._id} product={product} handleUpdate={handleUpdate}></InventoryDetails>))
                    }
        
               
        
      
           

        </div>
    );
};

export default Inventory;