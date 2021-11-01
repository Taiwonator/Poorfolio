import React from 'react'
import Carousel from 'src/components/Primitives/Carousel/Carousel'
import FlexWrapper from 'src/components/Wrappers/FlexWrapper'
import { SETTINGS } from 'src/styles/settings'
import Info from './Info'

const infoSections = {
    projects: {
        header: 'Projects', 
        subheader: 'Lets go on a journey', 
        backgroundColor: SETTINGS.secondary,
        headerColor: SETTINGS.tertiary,
        subheaderColor: SETTINGS.primary,
        rows:
        [
            {
                child: <Carousel />
            }, 
            {
                child: <p>Projects child</p>
            }, 
            {
                child: <p>Projects child</p>
            }, 
        ]
    },
    designs: {
        header: 'Designs', 
        subheader: 'Querky and I love it', 
        backgroundColor: SETTINGS.tertiary,
        headerColor: SETTINGS.background,
        subheaderColor: SETTINGS.secondary,
        rows:
        [
            {
                child: <p>Designs child</p>
            }, 
            {
                child: <p>Designs child</p>
            }, 
            {
                child: <p>Designs child</p>
            }, 
        ]
    },
    me: {
        header: 'Me', 
        subheader: `I thought you'd never ask`, 
        backgroundColor: SETTINGS.primary,
        headerColor: SETTINGS.background,
        subheaderColor: SETTINGS.secondary,
        rows:
        [
            {
                child: <p>Me child</p>
            }, 
            {
                child: <p>Me child</p>
            }, 
            {
                child: <p>Me child</p>
            }, 
        ]
    },
}

const InfoSection = () => {
    return (
        <FlexWrapper name='info' minHeight='100vh' center>
            <InfoBuilder content={infoSections.projects} />
            <InfoBuilder content={infoSections.designs} />
            <InfoBuilder content={infoSections.me} />
        </FlexWrapper>
    )
}


const InfoBuilder = ({ content }) => {
    return (
        <Info.Container>
            <Info.Hero text={content.header} color={content.headerColor} backgroundColor={content.backgroundColor} subheaderColor={content.subheaderColor} />
            {content.rows.map((row, i) => {
                let colors = { background: content.backgroundColor, header: content.headerColor }
                if(i % 2 == 0) colors = { background: SETTINGS.background, header: SETTINGS.primary}

                return (
                    <Info.Row 
                        key={`${content.header}-row-${i}`}
                        backgroundColor={colors.background}
                        text={row.header}
                    >
                        { row.child }
                    </Info.Row>
                )
            })}
            <Info.Frame />
        </Info.Container>
    )
}


export default InfoSection
