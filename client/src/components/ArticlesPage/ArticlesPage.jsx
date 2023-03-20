import { Typography } from '@mui/material'
import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticlesPage.css'

const ArticlesPage = () => {
    return (
        <div>
            <div className="articlesContainer">
            <Typography variant='h1'>Articles</Typography>
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
                    <ArticleCard/>
                   
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default ArticlesPage
