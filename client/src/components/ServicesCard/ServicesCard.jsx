import { Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './ServicesCard.css'

const ServicesCard = ({heading,subheading,img,url}) => {
    return (
        <a href={url}>
            <div className='serviceContainer'>
            <div className="serviceImg">
            <img src={img}></img>
            </div>
            <div className="serviceText">
            <Typography variant='h5'>{heading}</Typography>
            <p>{subheading}</p>
            </div>
        </div>
            </a>
    )
}

export default ServicesCard
