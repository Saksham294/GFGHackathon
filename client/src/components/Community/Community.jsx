import React, { useState, useEffect } from 'react'
import './Community.css'
import { Link, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../Actions/contentActions'
import PostCard from '../PostCard/PostCard'

const Community = () => {
    const dispatch=useDispatch()
    let postsArray = []
    const {posts}=useSelector(state=>state.content)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    if(posts){
        postsArray=posts
    }


    return (
        <div>
            <div className="community">
                <div className="community__header">
                    <Typography sx={{textAlign:"center",fontFamily:"Montserrat",margin:"5rem"}} variant="h1" className="community__header__title">Community</Typography>
                </div>
                <div className="community__body">
                    <div className="community__body__posts">
                        {postsArray.map((post) => (

                            <PostCard
                                id={post._id}
                                image={post.image}
                                title={post.title}
                                description={post.content}
                            />
                        ))}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Community
