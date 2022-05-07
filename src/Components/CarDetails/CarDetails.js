import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const CarDetails = () => {
// const productId = useParams()
const [products] = useProducts(productId);
console.log(products);
    return (
        <div>
            <h1>car details</h1>
        </div>
    );
};

export default CarDetails;