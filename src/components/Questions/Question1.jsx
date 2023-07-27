import React, { useState } from 'react'
import styles from '../../styles/Question.module.css';
import Happy_Face from '/imgs/happy-face.png'
import Sad_Face from '/imgs/sad-face.png'
import Neutral_Face from '/imgs/neutral-face.png'
import { Btn } from '../Forms/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addFace } from '../../../redux/movieSlice';


function Question1(props) {

    const dispatch = useDispatch()
    const face = useSelector((state) => state.movies.face)

    const handleClick = (face) => {
        dispatch(addFace(face))
    }



    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_body}>
                    <div className={styles.qt1_dd}>1. How are you today?</div>
                    <div className={styles.card_container}>
                        <div className={`${styles.card} ${face === 'happy' ? styles.card_bg : ''}`} onClick={() => handleClick('happy')}>
                            <img src={Happy_Face} alt="happy-face" />
                            <div className={styles.txt}>Happy</div>
                        </div>
                        <div className={`${styles.card} ${face === 'neural' ? styles.card_bg : ''}`} onClick={() => handleClick('neural')}>
                            <img src={Neutral_Face} alt="neural-face" />
                            <div className={styles.txt}>Neutral</div>
                        </div>
                        <div className={`${styles.card} ${face === 'sad' ? styles.card_bg : ''}`} onClick={() => handleClick('sad')}>
                            <img src={Sad_Face} alt="sad-face" />
                            <div className={styles.txt}>Sad</div>
                        </div>
                    </div>
                    {
                        face !== '' && (
                            <div className='mt-5'>
                                <Btn text="Next" style={{ padding: '11px 45px' }} onClick={() => props.setIndex((index) => index + 1)} />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Question1