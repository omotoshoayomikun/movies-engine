import React from 'react'
import styles from '../../styles/Question.module.css';
import Happy_Face from '/imgs/happy-face.png'
import Sad_Face from '/imgs/sad-face.png'
import Neutral_Face from '/imgs/neutral-face.png'
import { Btn } from '../Forms/Btn';
function Question1() {
    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_body}>
                    <div className={styles.qt1_dd}>1. How are you today?</div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <img src={Happy_Face} alt="happy-face" />
                            <div className={styles.txt}>Happy</div>
                        </div>
                        <div className={styles.card}>
                            <img src={Neutral_Face} alt="neural-face" />
                            <div className={styles.txt}>Neutral</div>
                        </div>
                        <div className={styles.card}>
                            <img src={Sad_Face} alt="sad-face" />
                            <div className={styles.txt}>Sad</div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Btn text="Next" style={{padding: '11px 45px'}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question1