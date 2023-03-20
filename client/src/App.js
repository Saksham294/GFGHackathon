import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import MusicPage from './components/MusicPage/MusicPage';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import Exercises from './components/Exercises/Exercises';


function App() {
  return (
    <div className="App">
   
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/exercises" element={<Exercises/>}/>

          <Route path="/community" element={<Community/>}/>
          <Route path='/doctors' element={<Doctors/>}/> */}
          <Route path='/music' element={<MusicPage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path='/exercises' element={<Exercises/>}/>

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