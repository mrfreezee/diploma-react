import { MoviesType } from "../Movies/types"

export const addToFavorites = (movie: MoviesType) => ({
    type: 'ADD_TO_FAVORITES',
    payload: movie,
})

export const removeFromFavorites = (kinopoiskId: number) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: kinopoiskId,
})