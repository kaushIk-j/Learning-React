import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../redux/countSlice';

export const store = configureStore({
    reducer:{
        counter : countReducer
    }
});

