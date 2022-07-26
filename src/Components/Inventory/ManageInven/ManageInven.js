import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ManageInvenDetails from './ManageInvenDetails';
import '../Inventory.css'
const ManageInven = () => {
    const navigate = useNavigate()
    const [products,setProducts] = useProducts();

    const handleToDelete = id =>{
        const confirm = window.confirm ('Want to delete this item?')
       if (confirm) {
        // const url = `http://localhost:5000/inventory/${id}`;
        const url = `https://stormy-springs-20061.herokuapp.com/inventory/${id}`
       
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
        <div >
            
            <div className='container inventory  h-100 '>
            {
                       products.map(product =>(<ManageInvenDetails key={product._id} product={product} handleToDelete={handleToDelete} />))
                    }
            </div>
          

<button className='btn btn-primary btn-block mb-4 mx-4' onClick={()=> navigate('/')}>Go Back</button>
<button className='btn btn-primary btn-block mb-4'  onClick={()=> navigate('/addcollection')}>Add New Collection</button>

        </div>
    );
};

export default ManageInven;