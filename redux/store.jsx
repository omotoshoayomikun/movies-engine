import { configureStore } from "@reduxjs/toolkit";
import movieSlice, { fetchGenres } from "./movieSlice";
import genreSlice from "./genreSlice";

const store = configureStore({
    reducer: {
        movies: movieSlice,
        genres: genreSlice
    }
})

store.dispatch(fetchGenres()); // Fetch genres when the store is created

export default store