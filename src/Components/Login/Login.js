import React, {  useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';


import Spinner from '../Spinner/Spinner';
import auth from '../Firebase/Firebase.init';

const Login = () => {
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate =useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const emailRef = useRef('');
    const passRef = useRef('');

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   


    if (gLoading) {
    return <Spinner/>
}



  
    if (user) {
        navigate(from,{replace:true})
    }
    if (gUser) {
        navigate(from,{replace:true})
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    return (
        <div>
        <div className='login-container '>
            <div>
                <h2 className='form-title text-center h1'>Login</h2>
                <form className='login-form' onSubmit={handleUserSignIn}>
                    <div className="input-group ">
                        <input ref={emailRef} type="email" name="email" placeholder='Email'  required />
                    </div>
                    <div className="input-group">
                        
                        <input ref={passRef} type="password" name="password" placeholder='Password' id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                   
                    <input className='form-submit  bg-info' type="submit" value="Login" />
                </form>
        
                <p>
                    New to Dentist Ace? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <button onClick={resetPassword}>reset password</button> 
                <button className='hover:bg-sky-700' onClick={()=> signInWithGoogle()}> Google</button>
                {/* <button  onClick={()=> signInWithFacebook()}> Facebook</button> */}
                   
            </div>
        </div>
        <ToastContainer/>
     
        </div>
    );
};

export default Login;