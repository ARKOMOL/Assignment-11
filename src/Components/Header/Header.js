import React from 'react';
import { Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className=' bg-info '>

<div>    
<ul className=" container nav justify-content-between text-white ">
<div className=' px-5 mx-5'>
    <h3>Car Manager</h3>
</div>
<div className='d-flex'>
<li className="nav-item " >
  <CustomLink className="nav-link " to="/">Home</CustomLink>
    </li>
  <li className="nav-item ">
  <CustomLink className='px-5 nav-link' to="/blogs">Blogs</CustomLink>
  </li>
  <li className="nav-item">
  <CustomLink className='nav-link' to="/about">About</CustomLink>
  </li>
  <li className="nav-item">
  <CustomLink className='nav-link' to="/login">Login</CustomLink>
  </li>
</div>
</ul>
   
</div>






        </div>
    );
};

export default Header; 
