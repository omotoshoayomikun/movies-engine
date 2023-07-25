import React from 'react'
import styles from '../../styles/Question.module.css';
import { Btn, OutlineBtn } from '../Forms/Btn';
import { Interested_List } from '../../utilis/Data';

function Question3() {


    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_front}>
                    <div className={`${styles.model_body}`}>
                        <div className={styles.qt1_dd}>3. Please choose any genre you're interested in.</div>
                        <div className={`${styles.card_container}`}>
                            <ul className={`${styles.check_container} ${styles.disp_join}`}>
                                {
                                    Interested_List.map((list, i) => (
                                        <li key={i} className={`${styles.check}`}>
                                            <label className={styles.checking}>
                                                <input type="checkbox" name="interested" id="" />
                                                <span className={styles.checkmark_cont}>
                                                    <span className={styles.checkmark}></span>
                                                    <span className={styles.list}> {list}</span>
                                                </span>
                                            </label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.side_dd}>
                            <div className={styles.side_dd1}>
                                <OutlineBtn text='Back' style={{ padding: '9px 45px' }} />
                            </div>
                            <div className={styles.side_dd2}>
                                <Btn text='Next' style={{ padding: '11px 45px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question3