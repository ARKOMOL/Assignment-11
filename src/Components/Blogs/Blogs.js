
import React from 'react';


const Blogs = () => {
    return (
        <div className='w-50 mx-auto  '>
            <h1 className='bg-secondary py-1'>Blogs site</h1>
           <div>
               <h3>
               Difference between javascript and nodejs
               </h3>
           <h6>
            Javascript is a one of the best programming language in this time.It runs in any web browser, and helps in-app performance.JS is mainly used for any client-side development for web applications. Usually for refreshing the page in a specific interval, dynamic changes in the web app, and attribute validation.It's mainly using for create Web Apps. Javascript can run any engine like Google Chrome,Safari,Opera,Firefox,Brave browser etc.


            NodeJs widely used by developer specially Js developer because of it's useful library.Specially most of the time it's works in backend in the website.Its runs in V8 engine.NodeJS is written in C++ and provides a V8 engine base.
            </h6>
           </div>
        <div className='my-5'>
            <h3> When should you use nodejs and when should you use mongodb</h3>
            <h6>
            Node Js is a engine which is created by Javascript programming language.We can write any application via Node Js.Basically it's run Javascript's code.And when need a web application we use node js to build or create it. <br/>

            MongoDB is totally Different from Node js.Basically this is a Database where we can put data and use it whenever we want.But MongoDB is using NodeJs to perform himself.MongoDB is a api system we can load data from to our web site.
            </h6>
        </div>

        <div>
            <h3>What is the purpose of jwt and how does it work</h3>
            <h6>
            JWT means Json Web Token.It's is using to secure our websites data.And most important it save our users data and info from others maybe they will be hacker or someone.Without using it we may loss our users data.JWT giving us a token when we login our site because if jwt doesn't give us a token we may go losses our data.JWT contains encoded JSON objects,including a set of  claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </h6>
        </div>

        </div>
    );
};

export default Blogs;