import { configureStore } from '@reduxjs/toolkit';
import { userReducer, doctorsReducer, doctorReducer } from './Reducers/userReducer';
import { filterReducer, getAllContentReducer,postContentReducer } from './Reducers/contentReducer';

const initialState = {}

const store = configureStore({
    reducer: {
        user: userReducer,
        doctors: doctorsReducer,
        doctor: doctorReducer,
        content:getAllContentReducer,
        post: postContentReducer,
        filter: filterReducer
    },
    preloadedState: initialState
});

export default store;