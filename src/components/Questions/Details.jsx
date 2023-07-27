import React, { useEffect, useState } from 'react'
import styles from '../../styles/Question.module.css';
import Calender_Icon from '/imgs/calendar.png'
import Pic from '/imgs/movie_bg.jpg'
import { Btn, OutlineBtn } from '../Forms/Btn';
import { selectMoviesByGenres } from '../../../redux/movieSlice';
import { useSelector } from 'react-redux';
import View from './View';


function Details(props) {

    const filteredMovies = useSelector(selectMoviesByGenres);
    const [showView, setShowView] = useState(false)
    const [randomFilteredMovies, setRandomFilteredMovies] = useState([]);


    const getRandomMovies = (array, count) => {
        const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
    };

    const randomMoviesCount = 1;

    useEffect(() => {
        setRandomFilteredMovies(getRandomMovies(filteredMovies, randomMoviesCount));
    }, []);


    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_body}>
                    <div className={styles.qt1_dd}>Recommended for you:</div>
                    <div className={styles.detail_body}>
                        {randomFilteredMovies.map((movie, i) => (
                            <div key={i} className={styles.flexi_dir}>
                                <div className="flex-[2]" onClick={() => setShowView(true)}>
                                    <h2 className={styles.Details_text}>{movie.title}</h2>
                                    <p className={styles.detail_p}>{movie.overview}
                                    </p>
                                    <small className={`${styles.time} flex gap-1 mt-3`}>
                                        <img src={Calender_Icon} alt="" style={{ width: '20px', height: '20px' }} />
                                        {movie.release_date}
                                    </small>
                                    <div className="mt-4">
                                        <OutlineBtn
                                            text='View Details'
                                            style={{ padding: '9px 10px', }}
                                            onClick={() => setShowView(true)}
                                        />
                                    </div>
                                </div>
                                <div className="flex-[1.2]">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.detail_img} alt={movie.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.side_dd}>
                        <div className={styles.side_dd1}>
                            <OutlineBtn
                                text='Back'
                                style={{ padding: '9px 10px', }}
                                onClick={() => props.setIndex((index) => index - 1)}
                            />
                        </div>
                        <div className={styles.side_dd2}>
                            <Btn text='ANOTHER RECOMMENDATION'
                                style={{ padding: '11px 10px' }}
                                onClick={() => setRandomFilteredMovies(getRandomMovies(filteredMovies, randomMoviesCount))} />
                        </div>
                    </div>
                </div>
            </div>

            {
                showView && <View data={randomFilteredMovies[0]} setShowView={setShowView} />
            }
        </>
    )
}

export default Details