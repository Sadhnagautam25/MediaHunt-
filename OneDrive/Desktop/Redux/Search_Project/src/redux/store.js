import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import asidebarReducer from "./features/asidebarSlice";
import authReducer from "./features/authSlice";
import collectionReducer from "./features/collectionSlice";
import tostifyReducer from "./features/tostifySlice";
import profileReducer from "./features/profileSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    asideBar: asidebarReducer,
    auth: authReducer,
    collection: collectionReducer,
    tostify: tostifyReducer,
    profile: profileReducer,
    theme: themeReducer,
  },
});
