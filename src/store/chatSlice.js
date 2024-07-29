import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "livechat",
    initialState : {
        messages : [],
    },
    reducers:{
        addMessage : (state,action) => {
            state.messages.splice(15,2);
            state.messages.unshift(action.payload);
        },
    }
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;