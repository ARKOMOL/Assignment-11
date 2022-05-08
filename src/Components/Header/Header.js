import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../Firebase/Firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }
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
  
  {
                    user ?
                    <>
                      <CustomLink className='nav-link' to="/manageinven">Manage Items</CustomLink>
                      <CustomLink className='nav-link' to="/addcollection">Add Items</CustomLink>
                      <CustomLink className='nav-link' to="/myitems">MY Items</CustomLink>
                      <button className='btn btn-primary btn-block mb-4 ' onClick={handleSignOut}>Signout</button>
                    </>
                    :
                    <CustomLink className='nav-link' to="/login">Login</CustomLink>
   }
  
  
</div>
</ul>
   
</div>






        </div>
    );
};

export default Header; 
