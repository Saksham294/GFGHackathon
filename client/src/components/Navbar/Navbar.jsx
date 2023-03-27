import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {AiOutlinePlus} from '@react-icons/all-files/ai/AiOutlinePlus'
import './Navbar.css'
import { Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuBar from './MenuBar';

const Navbar = () => {

    const { isAuthenticated } = useSelector((state) => state.user);
    const {isDocAuthenticated}=useSelector((state)=>state.doctor)
    return (
        <div className='navMain'>

        <div className="nav">
      
    <Link to='/'>  <div className="home">Home</div></Link>  
       <Link to='/explore'><div className="explore">Explore</div></Link>
       <Link to='/aboutus'><div className="about-us">About Us</div></Link>  


        
        </div>
        {isAuthenticated?<MenuBar className='menuBar'/>: <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>}
           {isDocAuthenticated?<Link className='link' to="/newPost" style={{ textDecoration: 'none',color:"white" }} ><Button startIcon={<AddIcon/>} variant='contained' sx={{marginTop:"1.8rem",marginLeft:"1rem",backgroundColor:"#35dea0"}}>Add Post</Button></Link>:null}
        
     </div>
    )
}

export default Navbar

