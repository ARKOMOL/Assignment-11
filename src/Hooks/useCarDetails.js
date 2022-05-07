import { useEffect, useState } from "react";


const useCarDetails = carId => {
    const [carDetails,setCarDetails] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${carId}`;
        console.log(url);
        
    })

    return (
        <div>
            
        </div>
    );
};

export default useCarDetails;