import React from 'react';
import { Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
<h1>header</h1>
<Nav className='text-none justify-content-center' >
 
    <CustomLink to="/">Home</CustomLink>
    <CustomLink className='px-5' to="/blogs">Blogs</CustomLink>
    <CustomLink to="/about">About</CustomLink>


</Nav>



        </div>
    );
};

export default Header; 
