import React from 'react'
import './LandingScreen.module.scss'
import colors from '../../theme/colors.module.scss';

const LandingScreen: React.FC = () => {
    return (
        <div className='landing-screen'>
            <p>myRed's value: {colors.myRed}</p>
        </div>
    )
}

export default LandingScreen