import React from 'react';


const Banner = () => {
  
    return (
        <div className='bg-info'>
            <div className=' d-flex container mx-auto py-5 '>
            <div className='my-auto mx-5'>
                <h1>
                    HERE WE MANAGE OUR CAR
                </h1>
                <p>
                The Car Warehouse was established in 1989, We have been in the motor industry for almost thirty years. We are now one of Europe's largest suppliers of used promotional advertising vehicles, Modern classics, Camper vans and Imported vehicles.
                </p>
            </div>
            <div>
                <img className='w-100 rounded img-fluid' src='https://cdna.artstation.com/p/assets/images/images/007/709/824/large/ricardo-escovinha-garage-01-hd.jpg?1507998886' alt="" />
            </div>
            </div>
           

        </div>
    );
};

export default Banner;