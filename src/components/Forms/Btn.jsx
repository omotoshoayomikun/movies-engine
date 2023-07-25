import React from 'react'
import styles from '../../styles/Forms/Btn.module.css'
export function Btn(props) {
    return (
        <>
            <button className={styles.btn} style={props.style}>{props.text}</button>
        </>
    )
}

export function OutlineBtn(props) {
    return (
        <>
            <button className={styles.outline_btn} style={props.style}>{props.text}</button>
        </>
    )
}

