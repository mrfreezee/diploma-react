import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./Movies/reducer";
import { ThunkAction, Action } from "@reduxjs/toolkit";
import { themeReducer } from "./Theme/reducer";
import { regReducer } from "./Registration/reducer";
import { authReducer } from "./Auth/reducer";
import { MoviesState } from "./Movies/types";
import { favoritesReducer } from "./Favorites/reducer";
import { userReducer } from "./UserProfile/reducer";
// import { authReducer } from "../helpers/AuthContext";


const rootReducer = combineReducers({
    movies: moviesReducer,
    theme: themeReducer,
    reg: regReducer,
    auth: authReducer,
    favorites: favoritesReducer,
    user: userReducer
    // authSignin: authLoginedReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
    
>

export {
    store as appStore
}


