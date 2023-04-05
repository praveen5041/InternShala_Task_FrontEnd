import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Components/Messenger/Slice";
import appApi from "./Components/Api";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});
const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store