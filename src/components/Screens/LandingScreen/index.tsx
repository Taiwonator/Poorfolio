import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import { SETTINGS } from 'src/styles/settings'
import FlexWrapper from '../../Wrappers/FlexWrapper';
import Arrow from '../../../assets/svg/arrow.svg'
import LandingScreenHeader from './Header';
import Button from 'src/components/Primitives/Button/Button';
import Phone from '../Phone';

const LandingScreen: React.FC = () => { 
    return (
            <FlexWrapper name='landing-screen' tag='section' minHeight='100vh'>
                <div className={styles['landing-screen']}>
                    <div className={styles['landing-screen__left']}>
                        <LandingScreenHeader />
                        <Button text='shout me 🎉' />
                    </div>
                    <div className={styles['landing-screen__right']}>
                        <Phone />
                    </div>
                </div>
            </FlexWrapper>
            
    )
}

/* PAGE WRAPPERS
- FlexWrapper
- PageGutter
*/

export default LandingScreen