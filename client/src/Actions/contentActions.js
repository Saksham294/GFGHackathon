import axios from "axios";



export const filterArticlesByCategory = () => async (dispatch) => {
  try {

    dispatch({
      type: "filterArticlesByCategoryRequest"
    })

    const { data } = await axios.get("/api/filterArticlesByCategory")

    dispatch({
      type: "filterArticlesByCategorySuccess",
      payload: data.articles,
    })

  } catch (error) {

    dispatch({
      type: "filterArticlesByCategoryFailure",
      payload: error.response.data.message,
    })
  }
}

export const filterVideosByCategory = () => async (dispatch) => {
  try {

    dispatch({
      type: "filterVideosByCategoryRequest"
    })

    const { data } = await axios.get("/api/filterVideosByCategory")

    dispatch({
      type: "filterVideosByCategorySuccess",
      payload: data.videos,
    })

  } catch (error) {

    dispatch({
      type: "filterVideosByCategoryFailure",
      payload: error.response.data.message,
    })
  }
}

export const filterMusicByCategory=()=>async(dispatch)=>{
  try{
    dispatch({
      type:"filterMusicByCategoryRequest"
    })
    const {data}=await axios.get("/api/filterMusicByCategory")
    dispatch({
      type:"filterMusicByCategorySuccess",
      payload:data.music
    })
  }catch(error){
    dispatch({
      type:"filterMusicByCategoryFailure",
      payload:error.response.data.message
    })
  }
}

export const getAllVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllVideosRequest"
    })
    const { data } = await axios.get("/api/getAllVideos")
    dispatch({
      type: "getAllVideosSuccess",
      payload: data.videos
    })
  } catch (error) {
    dispatch({
      type: "getAllVideosFailure",
      payload: error.response.data.message
    })
  }
}

export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllArticlesRequest"
    })
    const { data } = await axios.get("/api/getAllArticles")
    dispatch({
      type: "getAllArticlesSuccess",
      payload: data.articles
    })
  } catch (error) {
    dispatch({
      type: "getAllArticlesFailure",
      payload: error.response.data.message
    })
  }
}

export const getAllMusic = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllMusicRequest"
    })
    const { data } = await axios.get("/api/getAllMusic")
    dispatch({
      type: "getAllMusicSuccess",
      payload: data.music
    })
  } catch (error) {
    dispatch({
      type: "getAllMusicFailure",
      payload: error.response.data.message
    })
  }
}

export const getAllPosts=()=>async(dispatch)=>{
  try{
    dispatch({
      type:"getAllPostsRequest"
    })
    const {data}=await axios.get("/api/getPost")
    dispatch({
      type:"getAllPostsSuccess",
      payload:data.posts
    })
  }catch(error){
    dispatch({
      type:"getAllPostsFailure",
      payload:error.response.data.message
    })
  }
}

export const newPost=(title,description,image)=>async(dispatch)=>{
  try{
    dispatch({
      type:"newPostRequest"
    })
    const {data}=await axios.post("/api/newPost",{title,description,image})
    dispatch({
      type:"newPostSuccess",
      payload:data.post
    })
  }catch(error){
    console.log(error)
    dispatch({
      type:"newPostFailure",
      payload:error.response.data.message
    })
  }
}

export const getPost=(id)=>async(dispatch)=>{
  try {

    dispatch({
        type:"getPostRequest"
    })

    const {data}=await axios.get(`/api/getPost/${id}`)
    
    dispatch({
        type:"getPostSuccess",
        payload:data.post,
    })
    
} catch (error) {

    dispatch({
        type:"getPostFailure",
        payload: error.response.data.message,
    })
}
}