import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticlesPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllArticles } from '../../Actions/contentActions'
import { Button } from '@mui/material'
import { filterArticlesByCategory } from '../../Actions/contentActions'

const ArticlesPage = () => {
    let article = []
    const { loading: articlesLoading, articles } = useSelector(state => state.content)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch])
    if (articles) {
        article = articles
    }

    const [filtered, setFiltered] = React.useState(false)
    const filterHandler = (category) => {
        setFiltered(!filtered);
        dispatch(filterArticlesByCategory(category))
    }
    let filterArticles = []
    const { loading: filteredLoading, filter } = useSelector(state => state.filter)
    if (!filteredLoading && filtered) {
        filterArticles = filter
        console.log(filterArticles)
        article = filterArticles
        console.log(article)
    }


    return article!=undefined &&article.length > 0 ? (

        <div>
            <div className="articlesContainer">
                <Typography variant='h1'>Articles</Typography>
                <div className="sectionsContainer">
                    <div className="leftSection">
                        <Typography variant='h4' sx={{ marginLeft: "2rem" }}>
                            Categories</Typography>
                        {
                            article.map((item, index) =>  

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
                            {
                                article.map((item, index) => {
                                    return <ArticleCard key={index}
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

        </div>
    ) : null
}

export default ArticlesPage
