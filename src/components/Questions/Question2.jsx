import React from 'react'
import styles from '../../styles/Question.module.css';
import { Btn, OutlineBtn } from '../Forms/Btn';
import { Occasion_List } from '../../utilis/Data';

function Question2(props) {
    return (
        <>
            <div className={styles.model_bg}>
                <div className={styles.model_body}>
                    <div className={styles.qt1_dd}>2. What comes closest to your occasion?</div>
                    <div className={styles.card_container}>
                        <ul className={styles.check_container}>
                            {
                                Occasion_List.map((list, i) => (
                                    <li key={i} className={styles.check}>
                                        <label className={styles.checking}>
                                            <input type="radio" name="occasion" id="" />
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
                            <OutlineBtn text='Back' style={{ padding: '9px 45px' }} onClick={() => props.setIndex((index) => index - 1)} />
                        </div>
                        <div className={styles.side_dd2}>
                            <Btn text='Next' style={{ padding: '11px 45px' }} onClick={() => props.setIndex((index) => index + 1)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question2