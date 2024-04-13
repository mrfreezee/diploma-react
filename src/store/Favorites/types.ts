import { MoviesType } from "../Movies/types"

export type FavoritesState = {
    favoriteMovies: MoviesType[]
}

export type AddToFavoritesAction = {
    type: 'ADD_TO_FAVORITES'
    payload: MoviesType
}

export type RemoveFromFavoritesAction = {
    type: 'REMOVE_FROM_FAVORITES'
    payload: number
}