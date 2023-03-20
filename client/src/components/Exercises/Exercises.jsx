import React from 'react'
import './Exercises.css'
import ReactPlayer from 'react-player/youtube'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
    InstapaperShareButton,
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";
import ExerciseVideoCard from '../ExerciseVideoCard/ExerciseVideoCard';

const Exercises = () => {
    return (
        <div>
            <Typography variant='h1' sx={{
                textAlign: 'center',
                margin: "5rem"
            }}>Exercises</Typography>
           
<div className="sectionsContainer">
                <div className="leftSection">
                    <Typography variant='h4' sx={{marginLeft:"2rem"}}>
                        Categories</Typography>
                </div>
                <div className="rightSection">
                    <Typography variant='h4' sx={{marginLeft:"2rem"}}>
                        Featured
                    </Typography>
                    <div className="itemsContainer">
                    
                    <ExerciseVideoCard
                url={"https://www.youtube.com/watch?v=5qap5aO4i9A"}
                imgUrl={"https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"}
            />
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Exercises

/*
Meditation
Yoga
Physical

*/