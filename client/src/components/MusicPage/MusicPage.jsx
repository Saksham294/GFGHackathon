import React, { useEffect } from 'react'
import './MusicPage.css'
import { Button, Typography } from '@mui/material'
import MusicCard from '../MusicCard/MusicCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMusic } from '../../Actions/contentActions'

const MusicPage = () => {

    const dispatch = useDispatch()
    let musics=[]
    let {loading:musicLoading,music} = useSelector(state => state.content)
 
    useEffect(() => {
        dispatch(getAllMusic())
    }, [dispatch])
    if(music){
        musics=music
    }

    const filterHandler=(category)=>{
        console.log("Filtered music")
        musics=music.filter(item=>item.category===category)

    }

    return musics.length>0? (

        <div>
            <div className="musicPageContainer">

                <Typography variant='h1' sx={{
                    textAlign: 'center',
                    margin: "5rem"
                }}>Music curated for your mind</Typography>
                <div className="sectionsContainer">
                    <div className="leftSection">
                        <Typography variant='h4' sx={{ marginLeft: "2rem" }}>
                            Categories</Typography>
                            {
                            musics.map((item, index) =>  

                            (
                                <div className="categoryContainer">
                                    <Typography variant='h5' sx={{ marginLeft: "2rem" }}>

                                       <Typography sx={{margin:"0.1rem",fontFamily:"Lato",fontSize:"1.5rem",marginLeft:"3rem"}}>{item.category}</Typography>
                                    </Typography>

                                </div>

                            ))


                        }
                    </div>
                    <div className="rightSection">
                        <Typography variant='h4' sx={{ marginLeft: "2rem" }}>
                            Featured
                        </Typography>
                        <div className="itemsContainer">
                            {musics.map((item, index) => {
                                return <MusicCard key={index} 
                                    title={item.title}
                                    img={item.imgUrl}
                                    url={item.url}
                                    />

                            })}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        : null
}


export default MusicPage
