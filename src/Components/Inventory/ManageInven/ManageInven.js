import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ManageInvenDetails from './ManageInvenDetails';

const ManageInven = () => {
    const navigate = useNavigate()
    const [products,setProducts] = useProducts();

    const handleToDelete = id =>{
        const confirm = window.confirm ('Want to delete this item?')
       if (confirm) {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            const restItems = products.filter(product => product._id !== id);
            setProducts(restItems);
        })
       }
        
    }
    return (
        <div>
            {
                       products.map(product =>(<ManageInvenDetails key={product._id} product={product} handleToDelete={handleToDelete} />))
                    }

<button  onClick={()=> navigate('/')}>Go Back</button>
<button  onClick={()=> navigate('/addcollection')}>Add New Collection</button>

        </div>
    );
};

export default ManageInven;