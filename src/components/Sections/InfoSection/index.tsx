import React from 'react'
import FlexWrapper from 'src/components/Wrappers/FlexWrapper'
import { SETTINGS } from 'src/styles/settings'
import Info from './Info'

const InfoSection = () => {
    return (
        <FlexWrapper name='info' minHeight='100vh' center>
            <Info.Container>
                <Info.Hero text='Projects' color={SETTINGS.tertiary} backgroundColor={SETTINGS.secondary}/>
                <Info.Row
                    backgroundColor={SETTINGS.background}
                    color={SETTINGS.primary}
                    headerColor={SETTINGS.primary}
                    text='header 1'
                >
                    <p> I am a child</p>
                </Info.Row>
                
                <Info.Row
                    backgroundColor={SETTINGS.secondary}
                    color={SETTINGS.primary}
                    headerColor={SETTINGS.tertiary}
                    text='header 2'
                >
                    <p> I am a child</p>
                </Info.Row>
                <Info.Frame />
            </Info.Container>
        </FlexWrapper>
    )
}

export default InfoSection
