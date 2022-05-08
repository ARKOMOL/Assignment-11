/* import React from 'react';
import { useParams } from 'react-router-dom';



const handleStock = (e) => {
    const{ carId }= useParams()
    e.preventDefault();
    const number = e.target.number.value;
   
      const updateQuantity = singleProduct?.quantity + parseInt(number);
      // send update data to the server
      fetch(`https://king-furniture.herokuapp.com/inventory/${id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
 
  };

const ReStock = () => {
    return (
        <div>
            <h1>restock</h1>
            <form onSubmit={handleStock}>
            <div className="form-outline mb-4">
              <input
                type="number"
                id="number"
                className="form-control"
                placeholder="Type number"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send
            </button>
          </form>
        </div>
    );
};

export default ReStock; */