import { useEffect, useState } from "react";


const useCarDetails = carId => {
    const [carDetails,setCarDetails] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${carId}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data =>setCarDetails(data))
    },[carId])

    return [carDetails,setCarDetails] ;
};

export default useCarDetails;