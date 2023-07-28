import React from 'react'
import styles from '../../styles/Question.module.css';
import Calender_Icon from '/imgs/calendar.png'
import Time_Icon from '/imgs/time.png'
import Star_Icon from '/imgs/star.png'
import { CancelBtn } from '../Forms/Btn';

function View({ data, setShowView }) {

    return (
        <>
            <div className={`${styles.model_bg}`}>
                <div className={`${styles.cancel_container} ml-auto mr-auto w-max`}>
                    <CancelBtn onClick={() => setShowView(false)} />
                </div>
                <div className={styles.model_body}>
                    <div className="">
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} className={styles.view_image} />
                        <div className={styles.detail_body}>
                            <h2 className={styles.Details_text}>{data.title}</h2>
                            <p className={styles.detail_p}>{data.overview}
                            </p>
                            <div className={styles.vvlc}>
                                <small className={`${styles.time} flex gap-1 mt-3`}>
                                    <img src={Calender_Icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                    {data.release_date}
                                </small>
                                {/* <small className={`${styles.time} flex gap-1 mt-3`}>
                                    <img src={Time_Icon} alt="" style={{ width: '20px', height: '20px' }} />
                                    1956
                                </small> */}
                                <small className={`${styles.time} flex gap-1 mt-3`}>
                                    <img src={Star_Icon} alt="" style={{ width: '20px', height: '20px' }} />
                                    {data.vote_average}
                                </small>
                                <small className={`${styles.time} flex gap-1 mt-3`}>
                                    <span className='mr-3'>POPULARITY:</span>  
                                    {data.popularity}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View