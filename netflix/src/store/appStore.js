import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import movieSlice from './movieSlice';
import gptSlice from './gptSlice';

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gptsearch:gptSlice
    }
});

export default appStore