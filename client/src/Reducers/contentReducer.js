import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const getAllContentReducer = createReducer(initialState, {
    getAllMusicRequest: (state, action) => {
        state.loading = true;
    },
    getAllMusicSuccess: (state, action) => {
        state.loading = false;
        state.music = action.payload;
    },
    getAllMusicFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    getAllVideosRequest: (state, action) => {
        state.loading = true;
    },

    getAllVideosSuccess: (state, action) => {
        state.loading = false;
        state.videos = action.payload;
    },
    getAllVideosFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    getAllArticlesRequest: (state, action) => {
        state.loading = true;
    },
    getAllArticlesSuccess: (state, action) => {
        state.loading = false;
        state.articles = action.payload;
    },
    getAllArticlesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getAllPostsRequest: (state, action) => {
        state.loading = true;
    }
    ,
    getAllPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    }
    ,
    getAllPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    

})

export const postContentReducer = createReducer(initialState, {
    newPostRequest: (state, action) => {
        state.loading = true;
    }
    ,
    newPostSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    }
    ,
    newPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    getPostRequest: (state, action) => {
        state.loading = true;
    }
    ,
    getPostSuccess: (state, action) => {
        state.loading = false;
        state.post = action.payload;
    }
    ,
    getPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    
})


export const filterReducer = createReducer(initialState, {
    filterArticlesByCategoryRequest: (state, action) => {
        state.loading = true;
    },
    filterArticlesByCategorySuccess: (state, action) => {
        state.loading = false;
        state.filterByCategory = action.payload;
    },
    filterArticlesByCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    ,
    filterVideosByCategoryRequest: (state, action) => {
        state.loading = true;
    },
    filterVideosByCategorySuccess: (state, action) => {
        state.loading = false;
        state.filterByCategory = action.payload;
    },
    filterVideosByCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    ,
    filterMusicByCategoryRequest: (state, action) => {
        state.loading = true;
    },
    filterMusicByCategorySuccess: (state, action) => {
        state.loading = false;
        state.filterByCategory = action.payload;
    },
    filterMusicByCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    ,
})
