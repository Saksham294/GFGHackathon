import { Typography } from '@mui/material'
import React from 'react'
import './PostCard.css'
import { Link } from 'react-router-dom'

const PostCard = ({id,image,title}) => {
    return (
        <div>
           <div className="postCardContainer">
                <Link to={`/getPost/${id}` } >
                <img src={image.url} alt="post" />
                <Typography variant='h5'>
                    {title}
                </Typography>
                </Link>


            </div>
        </div>
    )
}

export default PostCard
