import React, { Fragment } from 'react'
import './AboutUs.css'


import Footer from '../Footer/Footer'
import { Typography } from '@mui/material'

function AboutUs() {
    const image1 = "https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph"
    const image2 = "https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?size=626&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
    const image = 'https://img.freepik.com/free-vector/boost-your-immune-system-concept-illustration_114360-2813.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph'
    const bgimg = "https://img.freepik.com/free-vector/public-health-concept-illustration_114360-8989.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph"
    return (
        <div>
            <Fragment>
                <div className="headBox">
                    <img src={bgimg}></img>
                    <div className="bigTitle">
                        <Typography variant='h1' sx={{ fontFamily: "Momcake", fontSize: "6.5rem" }}>Redfining Mental HealthCare</Typography>
                    </div>
                </div>
                <div className="contentBox">
                    Who are we?
                    <br />

                </div>
                <div className="cb">
                    <div className="image1">
                        <img src={image2} ></img>
                    </div>
                    <div className="content1">
                        Mental Health has become a major concern in the world today. We are a team of passionate individuals who aim to create a better future for mental health
                        using technology.

                    </div>
                </div>
                <div className="missionContainer">
                    <div className="missionBox">
                        What we do?
                        <br />

                    </div>
                    <div className="cb">

                        <div className="content2">
                        Our mission is to create the best mental healthcare platform for people. 
                        Our Platform is designed to help people understand mental health issues,
                        connect with mental health professionals, and learn about mental health.
                            
                            
                            <br></br><br></br>
                        </div>
                        <div className="image2">
                            <img src={image1}></img>
                        </div>
                    </div>

                </div>
                <div className="contentBox">
                    How we do it?
                    <br />

                </div>
                <div className="cb">
                    <div className="image3">
                        <img src={image}></img>
                    </div>

                    <div className="content3">
                        We believe in a holistic approach when it comes to mental health.
                        <br></br>
                        <br></br>
                        Our AI chatbots are designed to help you understand about mental health in a friendly manner.
                        <br></br>
                        <br></br>
                        We provide videos, articles, exercises, and more to learn and deal with mental health issues.
                        <br></br>
                        <br></br>
                        We connect you with the best mental health professionals in your area.
                    </div>

                </div>
            </Fragment>

        </div>
    )
}

export default AboutUs
//Creating Impact through words

{/* <Typography variant="h3" className="aboutUsTitle" sx={{fontFamily:"Montserrat",margin:"1rem"}}>About Us</Typography>
            <Typography variant='h4' sx={{fontFamily:"Montserrat",margin:"1rem"}}>Who are we?</Typography>
            <br/>
            <br/>
            <Typography variant='h4' sx={{fontFamily:"Montserrat",margin:"1rem"}}>What we do?</Typography>
            <br/>
            <br/>
            <Typography variant='h4' sx={{fontFamily:"Montserrat",margin:"1rem"}}>How we do it?</Typography> */}