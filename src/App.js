import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/404 Page/NotFound';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import CarDetails from './Components/CarDetails/CarDetails';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageInven from './Components/Inventory/ManageInven/ManageInven';
// import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
  
     <Header/>

      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/blogs' element={<Blogs/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/inventory/:carId' element={<CarDetails/>}/>
        <Route path ='/manageinven' element={<ManageInven/>}/>
        {/* <Route path ='/login' element={<Login/>}/> */}
        {/* <Route path ='*' element={<NotFound/>}/> */}
      </Routes>
      
<Footer/>
    </div>
  );
}

export default App;
