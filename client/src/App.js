import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { loadUser } from './Actions/userActions';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import MusicPage from './components/MusicPage/MusicPage';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import Exercises from './components/Exercises/Exercises';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DoctorsPage from './components/DoctorsPage/DoctorsPage';
import Community from './components/Community/Community';
import AboutUs from './components/AboutUs/AboutUs';
import Explore from './components/Explore/Explore';
import DoctorLogin from './components/DoctorLogin/DoctorLogin';
import DoctorRegister from './components/DoctorRegister/DoctorRegister';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
 
  },[dispatch])


  const {isAuthenticated} = useSelector(state => state.user)
  return (
    <div className="App">
   
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>


          <Route path="/community" element={<Community/>}/>
       
          <Route path='/doctors' element={<DoctorsPage/>}/> 
          <Route path='/music' element={<MusicPage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path='/exercises' element={<Exercises/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/doctor/login' element={<DoctorLogin/>}/>
          <Route path='/doctor/register' element={<DoctorRegister/>}/>


        </Routes>
      </Router>


      <Footer/>
    </div>
  );
}

export default App;


// Create authentic info
//exercises
//connecting to doctor
//community
//ai chatbot