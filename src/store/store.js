import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";
import suggestionsSlice from "./suggestionsSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        menu : menuSlice,
        suggestions : suggestionsSlice,
        livechat: chatSlice
    }
});

export default store;