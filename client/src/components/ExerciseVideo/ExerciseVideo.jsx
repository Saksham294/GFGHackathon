import React from 'react'
import './ExerciseVideo.css'
import ReactPlayer from 'react-player/youtube'
import Typography  from '@mui/material/Typography'
import { Button } from '@mui/material';
import {IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
    InstapaperShareButton,
    FacebookShareButton,
    TwitterShareButton,
  } from "react-share";

const ExerciseVideo = ({title,url}) => {
    return (
        <div>
            <div className="vidContainer">
            <Typography variant='h3'>{title}</Typography>
            <ReactPlayer url={url}
            controls={true}

            />
            <div className="shareButtonsContainer">
            <FacebookShareButton url={url}>
                <IconButton >
                    <FacebookIcon sx={{fontSize:"2.5rem"}} />
                </IconButton>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <IconButton>
                    <TwitterIcon sx={{fontSize:"2.5rem"}} />
                </IconButton>
            </TwitterShareButton>
            <InstapaperShareButton url={url}>
                <IconButton>
                    <InstagramIcon sx={{fontSize:"2.5rem"}} />
                </IconButton>
            </InstapaperShareButton>
            </div>
            </div>
        </div>
    )
}

export default ExerciseVideo
