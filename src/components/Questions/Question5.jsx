import React, { useState } from 'react'
import styles from '../../styles/Question.module.css';
import { Age_Appropriateness_List, MPAA_List } from '../../utilis/Data';
import { Btn, OutlineBtn } from '../Forms/Btn';

function Question5() {

    const [display, setDisplay] = useState({
        age: true,
        old: false
    })

    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_front}>
                    {
                        display.age && (
                            <div className={styles.model_body}>
                                <div className={styles.qt1_dd}>5. Is the age-appropriateness rating of the movie important to you?</div>
                                <div className={`${styles.card_container}`}>
                                    <ul className={`${styles.check_container}`}>
                                        {
                                            Age_Appropriateness_List.map((list, i) => (
                                                <li key={i} className={`${styles.check}`}>
                                                    <label className={styles.checking}>
                                                        <input type="radio" name="age" id="" />
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
                        )
                    }

                    {
                        display.old && (
                            <div className={styles.model_body}>
                                <div className={styles.qt1_dd}>5. Please select all MPAA ratings that you're okay with.</div>
                                <div className={`${styles.card_container}`}>
                                    <ul className={`${styles.check_container}`}>
                                        {
                                            MPAA_List.map((list, i) => (
                                                <li key={i} className={`${styles.check}`}>
                                                    <label className={styles.checking}>
                                                        <input type="checkbox" name="rating" id="" />
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
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Question5