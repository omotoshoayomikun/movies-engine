import React from 'react'
import styles from '../../styles/Question.module.css';
import { Btn, OutlineBtn } from '../Forms/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenres } from '../../../redux/genreSlice';
import { selectMoviesByGenres } from '../../../redux/movieSlice';

function MovieGenre(props) {
    const dispatch = useDispatch()

    const genres = useSelector((state) => state.movies.genres)
    const selectedGenres = useSelector((state) => state.genres);

    
    const handleGenreSelection = (genreId) => {
        const updatedSelectedGenres = selectedGenres.includes(genreId)
        ? selectedGenres.filter((id) => id !== genreId)
        : [...selectedGenres, genreId]
        dispatch(selectGenres(updatedSelectedGenres));
    }
    

    const check = useSelector((state) => state.genres)

    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_front}>
                    <div className={`${styles.model_body}`}>
                        <div className={styles.qt1_dd}>3. Please choose any genre you're interested in.</div>
                        <div className={`${styles.card_container}`}>
                            <ul className={`${styles.check_container} ${styles.disp_join}`}>
                                {
                                    genres.map((genre, i) => (
                                        <li key={genre.id} className={`${styles.check}`}>
                                            <label className={styles.checking}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedGenres.includes(genre.id)}
                                                    onChange={() => handleGenreSelection(genre.id)}
                                                />
                                                <span className={styles.checkmark_cont}>
                                                    <span className={styles.checkmark}></span>
                                                    <span className={styles.list}> {genre.name}</span>
                                                </span>
                                            </label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.side_dd}>
                            <div className={styles.side_dd1}>
                                <OutlineBtn text='Back' style={{ padding: '9px 45px' }} onClick={() => props.setIndex((index) => index - 1)} />
                            </div>
                            {
                                check.length > 0 && (
                                    <div className={styles.side_dd2}>
                                        <Btn text='Next' style={{ padding: '11px 45px' }} onClick={() => props.setIndex((index) => index + 1)} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieGenre