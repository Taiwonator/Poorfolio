import React, { forwardRef } from 'react'
import styles from './index.module.scss'
import FlexWrapper from '../../Wrappers/FlexWrapper';
import Button from 'src/components/Primitives/Button/Button';
import Phone from '../Phone';
import { useScroll } from 'src/hooks/useScroll';
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth';
import LandingPageHeader from './Header';

const LandingPage = (props, ref) => { 

    const scrollY = useScroll()
    const device = useResponsiveWidth()
    const PhoneComp = (device === 'mobile') ? '' : <Phone ref={ref} type='normal'/>

    return (
            <FlexWrapper name='landing-screen' tag='section' minHeight='100vh'>
                <div className={styles['landing-screen']}>
                    <div className={styles['landing-screen__left']}>
                        <LandingPageHeader />
                        <Button text='shout me 🎉' />
                    </div>
                    <div className={styles['landing-screen__right']} style={{ transform: `translateY(-${scrollY}px)` }}>
                        { PhoneComp }
                    </div>
                </div>
            </FlexWrapper>
            
    )
}

/* PAGE WRAPPERS
- FlexWrapper
- PageGutter
*/

export default forwardRef<any>(LandingPage)