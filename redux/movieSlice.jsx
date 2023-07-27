import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_KEY = '0386ee5937417527530c9e27eea228da';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    );

    return response.data.results;
})


export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return response.data.genres;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        genres: [],
        face: '',
        loading: false,
        error: null
    },
    reducers: {
        addFace: (state, action) => {
            state.face = action.payload
        },
        reset: (state) => {
            state.face = ''
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })

            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })

            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
    }
})

export const selectMoviesByGenres = (state) => {
    const selectedGenres = state.genres;
    return state.movies.data.filter((movie) =>
        movie.genre_ids.some((genreId) => selectedGenres.includes(genreId))
    );
};


export const { addFace, reset} = movieSlice.actions
export default movieSlice.reducer