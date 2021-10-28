import React from 'react'
import Header from 'src/components/Primitives/Header/Header'
import FlexWrapper from 'src/components/Wrappers/FlexWrapper'

const ComingSoonScreen = () => {
    return (
        <FlexWrapper name='coming-soon' center screen minHeight='100vh'>
            <Header text='Coming Soon' tag='h2'/>
        </FlexWrapper>
    )
}

export default ComingSoonScreen