import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddCollection = () => {
    const navigate= useNavigate();
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
    return (
        <div>
            <h1>Add Collection</h1>

            <form className='d-flex flex-column w-25 py-4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-1 py-2 rounded-2' placeholder='Name' {...register("name", { pattern: /^[A-Za-z]+$/i })} />
                <input className='my-1 py-2 rounded-2' placeholder='Description'  {...register("description", { required: true, maxLength: 20 })} />
                <input className='my-1 py-2 rounded-2' placeholder='Image'  {...register("img", { required: true, maxLength: 200 })} />
                <input className='my-1 py-2 rounded-2' placeholder='Supplier Name'  {...register("supplier", { required: true, maxLength: 200 })} />
                <input className='my-1 py-2 rounded-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='my-1 py-2 rounded-2' placeholder='Price' type="number" {...register("price")} />
                <input className='my-1 py-2 rounded-2' placeholder='' type="submit" />
            </form>
            <button className='bg-info py-2 rounded-3 my-5' onClick={()=> navigate('/manageinven')} >Go back to Inventory</button>
        </div>
    );
};

export default AddCollection;