import React from 'react'
import styles from './TypingText.module.scss'

const TypingText = props => {
    return (
        <p className={styles['text']}>
            <span className={styles['text--print']}>Print</span>
            <span className={styles['text--bracket']}>(</span>
            &lsquo;Pick Me&lsquo;
            <span className={styles['text--bracket']}>)</span>
        </p>
    )
}

export default TypingText