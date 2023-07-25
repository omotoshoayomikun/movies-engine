import React from 'react'
import styles from '../../styles/Question.module.css';
import Calender_Icon from '/imgs/calendar.png'
import { Btn, OutlineBtn } from '../Forms/Btn';

function Details() {
    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_body}>
                    <div className={styles.qt1_dd}>Recommended for you:</div>
                    <div className={styles.detail_body}>
                        <div className={styles.flexi_dir}>
                            <div className="flex-[2]">
                                <h2 className={styles.Details_text}>Holiday in the Wild (only on Netflix)</h2>
                                <p className={styles.detail_p}>When her husband abruptly ends their marriage, empty nester Kate embarks on a
                                    solo second honeymoon in Africa, finding purpose and potential romance.
                                </p>
                                <small className={`${styles.time} flex gap-1 mt-3`}>
                                    <img src={Calender_Icon} alt="" style={{ width: '20px', height: '20px' }} />
                                    1956
                                </small>
                            </div>
                            <div className="flex-[1.2]">
                                <img src="../src/assets/imgs/movie_bg.jpg" className={styles.detail_img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.side_dd}>
                        <div className={styles.side_dd1}>
                            <OutlineBtn text='View Details' style={{ padding: '9px 10px', }} />
                        </div>
                        <div className={styles.side_dd2}>
                            <Btn text=' GET ANOTHER RECOMMENDATION' style={{ padding: '11px 10px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details