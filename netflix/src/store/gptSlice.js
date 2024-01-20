import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        search:false,
        lang:"English",
        suggestedMovies:null,
        suggestedMoviesInfo:null
    },
    reducers:{
        gptClicked:(state,action)=>{
            state.search = action.payload;
        },
        changeLang:(state,action)=>{
            state.lang = action.payload;
        },
        addSuggestedMovies:(state,action)=>{
            state.suggestedMovies = action.payload;
        },
        removeSuggestedMovies:(state,action)=>{
            state.suggestedMovies = null;
        },
        addSuggestedMoviesInfo:(state,action)=>{
            state.suggestedMoviesInfo = action.payload;
        }
    }
});

export const {gptClicked,changeLang,addSuggestedMovies,removeSuggestedMovies,addSuggestedMoviesInfo} = GptSlice.actions;

export default GptSlice.reducer;