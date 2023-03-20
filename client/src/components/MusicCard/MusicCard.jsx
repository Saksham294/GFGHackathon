import { Typography } from '@mui/material'
import React from 'react'
import './MusicCard.css'
import { Link } from 'react-router-dom'

const MusicCard = ({title,img,url}) => {
    return (
        <div>
            <div className="musicCardContainer">
                <Link to={url}>
                <img src={img} alt="music" />
                <Typography variant='h5'>
                    {title}
                </Typography>
                </Link>


            </div>
        </div>
    )
}

export default MusicCard
