import React from 'react'
import styles from '../../styles/Forms/Btn.module.css'
export function Btn(props) {
    return (
        <>
            <button className={styles.btn} onClick={props.onClick} style={props.style}>{props.text}</button>
        </>
    )
}

export function OutlineBtn(props) {
    return (
        <>
            <button className={styles.outline_btn} onClick={props.onClick} style={props.style}>{props.text}</button>
        </>
    )
}

export function CancelBtn(props) {
    return (
        <>
            <button className={styles.cancel_btn} onClick={props.onClick}>❌</button>
        </>
    )
}
