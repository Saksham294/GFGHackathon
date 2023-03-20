import React from 'react'
import './MusicPage.css'
import { Typography } from '@mui/material'
import MusicCard from '../MusicCard/MusicCard'

const MusicPage = () => {
    return (
        <div>
            <div className="musicPageContainer">
                
                <Typography variant='h1' sx={{
                textAlign: 'center',
                margin:"5rem"
             }}>Music curated for your mind</Typography>
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
                    <MusicCard
                        title="Acoustic"
                        img="https://img.freepik.com/free-vector/relaxed-woman-meditating_23-2148525630.jpg?size=338&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
                        url="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=9e8b6b8f1f3a4b7f"
                    />
                    <MusicCard
                        title="Acoustic"
                        img="https://img.freepik.com/free-vector/relaxed-woman-meditating_23-2148525630.jpg?size=338&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
                        url="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=9e8b6b8f1f3a4b7f"
                    />
                    <MusicCard
                        title="Acoustic"
                        img="https://img.freepik.com/free-vector/relaxed-woman-meditating_23-2148525630.jpg?size=338&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
                        url="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=9e8b6b8f1f3a4b7f"
                    />
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPage
