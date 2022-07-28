import React from 'react';
import { Link } from 'react-router-dom';

const OurApp = () => {
    return (
        <div>
             <div className='bg-info'>
            <div className=' d-flex container mx-auto py-5 '>
            <div className='my-auto mx-5'>
                <h3 className='text-danger'>
                    OUR APPS
                </h3>
                <h1>
                Download Our Free Mobile App Today Browse Millions of Ads
                </h1>
                <h4 className='my-3'>
                Work with the pro, talented people at the most affordable price to get the most out of your time and cost using mobile apps.</h4>
                <Link to={'https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=en&gl=US'}> <img className='w-25 h-25 rounded img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' alt="" />  </Link>
                <Link to={'https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=en&gl=US'}> <img className='w-25 h-25 rounded img-fluid' src='https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo.png' alt="" />  </Link>
            </div>
            <div>
                <img className='w-100 rounded img-fluid' src='https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80' alt="" />
            </div>
            </div>
           

        </div>


        </div>
    );
};

export default OurApp;