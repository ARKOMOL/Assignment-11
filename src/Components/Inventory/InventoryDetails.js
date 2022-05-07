import React from 'react';

const InventoryDetails = ({product}) => {
    console.log(product);
    const {name,img,description,price,quantity, supplier} =product
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default InventoryDetails;