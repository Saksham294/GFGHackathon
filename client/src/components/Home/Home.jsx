import { Typography } from '@mui/material'
import React from 'react'
import ServicesCard from '../ServicesCard/ServicesCard'
import './Home.css'


const Home = () => {
const bgImg="https://img.freepik.com/free-vector/flat-background-world-mental-health-day_23-2149624111.jpg?w=1480&t=st=1677856465~exp=1677857065~hmac=1838ba33a2827da915cfb9439a568d54c38b32b63efa22df94f17ff6101e65bc"

const arr=[
    {
        heading:"Doctors",
        subheading:"Get access to doctors who can help you with your mental health",
        img:"https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?size=626&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph",
        url:"/doctors"
    },
    {
        heading:"Community",
        subheading:"Connect with people who are going through the same thing",
        img:"https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph",
        url:"/community"
    },
    {
        heading:"Exercises",
        subheading:"Guided meditation and exercises to help you become healthier",
        img:"https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?size=338&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph",
        url:"/exercises"
    },
    {
        heading:"Music",
        subheading:"Mindful music to help you relax and focus",
        img:"https://img.freepik.com/free-vector/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg?size=338&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph",
        url:"/music"
    },
    {
        heading:"Articles",
        subheading:"Science-backed articles to help you understand your mental health better",
        img:"https://img.freepik.com/free-vector/giant-checklist_23-2148073346.jpg?size=338&ext=jpg&ga=GA1.1.384973956.1661681986&semt=sph",
        url:"/articles"
    }
]


    return (
        <div className='insideHome'>
            <Typography variant='h1'>MERA MANN</Typography>
            <img src={bgImg} alt="background" className="bgImg"/>
            <div className="servicesContainer">
            {
                arr.map((item)=>(
                    <ServicesCard
                    heading={item.heading}
                    subheading={item.subheading}
                    img={item.img}
                    url={item.url}
                        />
                ))
            }
            </div>
            <div className="info">
                
            </div>

        </div>
    )
}

export default Home
