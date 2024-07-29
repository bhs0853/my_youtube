import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name : "menu",
    initialState : {
        show : true,
        videoCategory : 28,
    },
    reducers:{
        manageShow : (state) => {
            state.show = false;
        },
        Display : (state) => {
            state.show = true;
        },
        toggleShow : (state) =>{
            state.show = !state.show;
        },
        setVideoCategory(state,action){
            state.videoCategory = action.payload;
        }
    }
});

export const {manageShow, Display, toggleShow,setVideoCategory} = menuSlice.actions;

export default menuSlice.reducer;