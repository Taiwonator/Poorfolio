import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import { SETTINGS } from 'src/styles/settings'
import FlexWrapper from '../../Wrappers/FlexWrapper';
import Arrow from '../../../assets/svg/arrow.svg'
import LandingScreenHeader from './Header';

const LandingScreen: React.FC = () => { 
    return (
            <FlexWrapper name='landing-screen' tag='section' minHeight='100vh' center screen>
                <div className={styles['landing-screen']}>
                    <LandingScreenHeader />
                    <button className={styles['landing-screen__scroll']}>
                        <Image src={Arrow} height='40px' alt='down arrow' />
                    </button>
                </div>
            </FlexWrapper>
            
    )
}

/* PAGE WRAPPERS
- FlexWrapper
- PageGutter
*/

export default LandingScreen