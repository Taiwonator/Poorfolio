import React from 'react'
import styles from './LandingScreen.module.scss'
import { SETTINGS } from 'src/theme/settings'

const LandingScreen: React.FC = () => { 
    console.log(SETTINGS);
    return (
        <div className={styles['landing-screen']}>
                <LandingScreenHeader />
            <button className="landing-screen__scroll">

            </button>
        </div>
    )
}

const LandingScreenHeader: React.FC = () => {

    return (
        <div className={styles.header}>
            <h2 className="header__top">Developer</h2>
            <h1 className="header__middle">Michael Taiwo<span className='header__dot'>.</span></h1>
            <h2 className="header__bottom">Designer</h2>
        </div>
    )
}

export default LandingScreen