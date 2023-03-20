import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import {AiOutlinePlus} from '@react-icons/all-files/ai/AiOutlinePlus'
import './Navbar.css'
import { Button } from '@mui/material';

const Navbar = () => {

    return (
        <div className='navMain'>

        <div className="nav">
      
    <Link to='/'>  <div className="home">Home</div></Link>  
       <Link to='/explore'><div className="explore">Explore</div></Link>
       <Link to='/aboutus'><div className="about-us">About Us</div></Link>  
         

        
        </div>
        {/* {isAuthenticated?<MenuBar className='menuBar'/>: <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>} */}
        
     </div>
    )
}

export default Navbar

