import React,{useEffect} from 'react'
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
import {useSelector,useDispatch} from 'react-redux'
import { getAllVideos } from '../../Actions/contentActions';
import ExerciseVideoCard from '../ExerciseVideoCard/ExerciseVideoCard';

const Exercises = () => {
    let video=[]
    const {loading:videosLoading,videos} = useSelector(state => state.content)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllVideos())
    }, [dispatch])
    if(videos){
        video=videos
    }

    return  video.length>0? (
        
            <div>
                <Typography variant='h1' sx={{
                    textAlign: 'center',
                    margin: "5rem"
                }}>Exercises</Typography>
               
    <div className="sectionsContainer">
                    <div className="leftSection">
                        <Typography variant='h4' sx={{marginLeft:"2rem"}}>
                            Categories</Typography>
                            {
                                video.map((item,index)=>
                                    
                                (
                                    <div className="categoryContainer">
                                        <Typography variant='h5' sx={{marginLeft:"2rem"}}>
                                        {
                                       item.category!=null?<Button variant="contained" sx={{margin:"1rem"}}>{item.category}</Button>:null
                                    }
                                        </Typography>

                                    </div>
                                    
                                ))


                            }
                    </div>
                    <div className="rightSection">
                        <Typography variant='h4' sx={{marginLeft:"2rem"}}>
                            Featured
                        </Typography>
                        <div className="itemsContainer">
                       {
                            video.map((item,index)=>{
                                return <ExerciseVideoCard key={index} 
                                    title={item.title}
                                    imgUrl={item.imgUrl}
                                    url={item.url}
                                    />
                            }
                            )
                       } 
                       
                        </div>
                    </div>
                    </div>
            </div>

    )
        : null
}

export default Exercises

/*
Meditation
Yoga
Physical

*/