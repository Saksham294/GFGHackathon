import {configureStore} from '@reduxjs/toolkit';
import {userReducer,doctorsReducer, doctorReducer} from './Reducers/userReducer';

const initialState = {}

const store = configureStore({ 
    reducer: {
        user: userReducer,
doctors:doctorsReducer,
doctor:doctorReducer,
    },
    preloadedState: initialState
});

export default store;