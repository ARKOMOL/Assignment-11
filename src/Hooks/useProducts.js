import { useEffect, useState } from 'react';

const useProducts = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        // fetch('https://stormy-springs-20061.herokuapp.com/inventory')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return [products,setProducts]
};

export default useProducts;