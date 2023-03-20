import React from 'react'
import './Footer.css'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="subscribeContainer">
                    <Typography  sx={{fontFamily:"Lato",marginLeft:"2.5rem"}} variant='h5'>Subscribe to our Newsletter Today</Typography>
                    <div className="subscribe">
                        <input type="text" placeholder="Enter your email address" />
                        <Button sx={{backgroundColor:"#32de84",color:"white",
                        ":hover": {
                            backgroundColor: "#32de84",
                            color:"white"
                        },
                    }}>Subscribe</Button>
                        </div>
                </div>
                <div className="aboutCompanyContainer">
                    <Typography sx={{fontFamily:"Lato"}} variant='h6'>About the Company</Typography>
                    <div className="aboutCompany">
                        <ul>
                            <li>Our Story</li>
                            <li>Our Mission</li>
                            <li>FAQs</li>
                        </ul>
                        </div>
                </div>
                <div className="followUsContainer">
                    <Typography  sx={{fontFamily:"Lato"}} variant='h6'>Follow Us</Typography>
                    <div className="followUs">
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            </ul>
                    </div>
                </div>
                <div className="contactUsContainer">
                    <Typography  sx={{fontFamily:"Lato"}} variant='h6'>Contact Us</Typography>
                    <div className="contactUs">
                        <ul>
                            <li>Phone: 123-456-7890</li>
                            <li>Email: </li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer
