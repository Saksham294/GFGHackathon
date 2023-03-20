import { Typography } from '@mui/material'
import React from 'react'
import './ExerciseVideoCard.css'

const ExerciseVideoCard = ({title,url,imgUrl}) => {
    return (
        <div>
            <div className="evContainer">
                
                <a href={url}>
                <img src={imgUrl}></img>
                    <Typography variant='h5'>
                        Hello
                    </Typography>
                </a>
            </div>
        </div>
    )
}

export default ExerciseVideoCard
