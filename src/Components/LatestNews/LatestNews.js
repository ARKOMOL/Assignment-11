import React, { useEffect, useState } from 'react';
import LatestDetails from './LatestDetails';
import '../Inventory/Inventory.css';
const LatestNews = () => {

    const [latest,setLatest] = useState([]);

    useEffect(()=>{
        // fetch('http://localhost:5000/latestnews')
        // fetch('https://stormy-springs-20061.herokuapp.com/latestnews')
        fetch('latest.json')
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setLatest(data)
        })
    },[])

    return (
       <div>
           <h1>
               Our Lateast News
           </h1>
            <div className='container inventory'>
            {
                       latest?.slice(0,3).map(latest =>(<LatestDetails key={latest._id} latest={latest}></LatestDetails>))
                    }
        </div>
       </div>
    );
};

export default LatestNews;