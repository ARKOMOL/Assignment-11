import React from 'react';
import useProducts from '../../Hooks/useProducts';
import InventoryDetails from './InventoryDetails';
const Inventory = () => {
    const [products,setProducts] = useProducts([]);
    // console.log(products);
    return (
        <div>
            <>
            
            {
                products.map(product =>(<InventoryDetails key={product._id} product={product}></InventoryDetails>))
            }

            </>

        </div>
    );
};

export default Inventory;