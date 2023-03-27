import React from 'react'
import './DoctorCard.css'
import { Typography } from '@mui/material'

const DoctorCard = ({url,imgUrl,doctorName}) => {

    return (
        <div>
             <div className="dvContainer">
                
                <a href={url}>
                <img src={imgUrl}></img>
                    <Typography variant='h5'>
                        {doctorName}
                    </Typography>
                </a>
            </div>

        </div>
    )
}

export default DoctorCard
