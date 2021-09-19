import React from 'react'
import styles from './Header.module.scss';

const LandingScreenHeader: React.FC = () => {

    return (
        <div className={styles['header']}>
            <h2 className={styles['header__top']}>Developer</h2>
            <h1 className={styles['header__middle']}></h1>
            <h2 className={styles['header__bottom']}>Designer</h2>
        </div>
    )
}

export default LandingScreenHeader