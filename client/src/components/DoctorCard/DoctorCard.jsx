import React from 'react'
import './DoctorCard.css'
import { Typography } from '@mui/material'

const DoctorCard = ({url,imgUrl,doctorName,city,phone}) => {

    return (
        <div>
             <div className="dvContainer">
                
                <a href={url}>
                <img src={imgUrl}></img>
                    <Typography variant='h5'>
                        {doctorName}
                    </Typography>
                </a>
                <Typography variant='h6'>
                    {city}
                </Typography>
                <Typography variant='h6'>
                    Mobile: {phone}
                </Typography>
            </div>

        </div>
    )
}

export default DoctorCard
