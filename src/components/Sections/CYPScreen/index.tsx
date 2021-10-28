import React from 'react'
import Header from 'src/components/Primitives/Header/Header'
import PrettyLine from 'src/components/Primitives/PrettyLine/PrettyLine'
import AbsoluteWrapper from 'src/components/Wrappers/AbsoluteWrapper'
import FlexWrapper from 'src/components/Wrappers/FlexWrapper'
import Tablet from './Tablet'

const CYPScreen = () => {
    return (
        <FlexWrapper name='choose-your-path' minHeight='100vh' center>
            <Header tag='h1' text='choose your path' />
            <Tablet />
        </FlexWrapper>
    )
}

export default CYPScreen
