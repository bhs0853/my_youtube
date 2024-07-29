
import {createSlice} from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
    name : "suggestions",
    initialState : {},
    reducers:{
        cacheResults : (state,action) => {
            state = Object.assign(state,action.payload);
        }
    }
});

export const {cacheResults} = suggestionsSlice.actions;

export default suggestionsSlice.reducer;