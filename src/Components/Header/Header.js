import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../Firebase/Firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }
    return (
       /*  <div className=' bg-info '>

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
        </div> */

        <>
        <Navbar collapseOnSelect expand="lg" sticky='top' className='bg-info text-dark' variant="dark">
            <Container>
                <Navbar.Brand className ='h5' as={Link} to="/">
                    {/* <img height={30} src={logo} alt="" /> */}
                    Car Manager
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                        
                    </Nav>
                    <Nav className='text-dark h5'>
                    <Nav.Link className='text-dark h5' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link  as={Link} to="blogs">Services</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user && <>
                            <Nav.Link as={Link} to="manageinven">Manage Items</Nav.Link>
                            <Nav.Link as={Link} to="addcollection">Add Items</Nav.Link>
                            <Nav.Link as={Link} to="myitems">My Item</Nav.Link>
                            </>
                        }
                        
                        {
                            user ?
                                <button className='btn h3 btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>










    );
};

export default Header; 
