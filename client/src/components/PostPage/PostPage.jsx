import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from '../../Actions/contentActions'
import './PostPage.css'

const PostPage = () => {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const { post, loading } = useSelector(state => state.post)
    let i = 0;
    let a = 0
    useEffect(() => {
        dispatch(getPost(id))
    }, [])



    return loading === undefined || loading === true ? null : (
        <div>

            <div className="writingContainer">
                <h1 style={{ textAlign: "center" }}>{post.title}</h1>
                <p className='author'>by {post.doctor.name}</p>
                <img className='imageContainer' src={post.image.url}></img>
                <p className='contentPP'>{post.description}</p>
            </div>

        </div>
    )
}

export default PostPage
