import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        search:false,
        lang:"en"
    },
    reducers:{
        gptClicked:(state,action)=>{
            state.search = !state.search;
        }
    }
});

export const {gptClicked} = GptSlice.actions;

export default GptSlice.reducer;