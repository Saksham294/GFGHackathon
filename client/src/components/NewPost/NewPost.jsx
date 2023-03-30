import React from 'react'
import './NewPost.css'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, loadDoctor } from '../../Actions/userActions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { newPost } from '../../Actions/contentActions';



const NewPost = () => {

  const [open, setOpen] = React.useState(false);
  const { loading } = useSelector(state => state.user)

  //   const { message } = useSelector(state => state.like)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch()

  const vertical = 'top'
  const horizontal = 'center'
  const [image, setImage] = React.useState(null);
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")

  const submitHandler = async (e) => {

    e.preventDefault();
    dispatch(newPost(title, content, image))
    dispatch(loadDoctor())


    handleClick()

  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };


  return (
    <div>
      <div className="newPostContainer">
        <form onSubmit={submitHandler}>
          <h1>New Post</h1>
          {image && <img src={image} alt='post' />}
          <input type='file' accept='image/*' onChange={handleImageChange} />

          <div className="title">
            <input type="text" placeholder='Title'
              value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </div>


          <div className="content">
            <input type="text" placeholder='Content'
              value={content} onChange={(e) => setContent(e.target.value)}
            />
          </div>


          <Button disabled={loading} type="submit" variant='contained' sx={{
            backgroundColor: "#ff6d6d",
            "&:hover": { backgroundColor: "#ff6d6d", color: "white" }
          }} >
            Post
          </Button>
        </form>
        {loading ? null : <Stack>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Post Created Successfully!
            </Alert>
          </Snackbar></Stack>}
      </div>
    </div>
  )
}

export default NewPost
