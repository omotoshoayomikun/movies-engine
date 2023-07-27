import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movieSlice';
import { useState } from 'react';

export const moviesFetch = async () => {
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch()

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0386ee5937417527530c9e27eea228da&language=en-US&page&append_to_response=now_playing&append_to_response=trending`)
        // dispatch(fetchMovies({movies}))
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}