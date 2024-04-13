import { AddToFavoritesAction, FavoritesState, RemoveFromFavoritesAction } from "./types";



const initialState: FavoritesState = {
    favoriteMovies: [],
}

export const favoritesReducer = (state = initialState, action: AddToFavoritesAction | RemoveFromFavoritesAction): FavoritesState => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload],
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie => movie.kinopoiskId !== action.payload),
            }
        default:
            return state
    }
}