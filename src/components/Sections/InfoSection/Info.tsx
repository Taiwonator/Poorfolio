import React from 'react'
import Header from 'src/components/Primitives/Header/Header'
import styles from './Info.module.scss'

interface ContainerProps {
    children: React.ReactNode,
}

const Container: React.FC<ContainerProps>  = ({ children }) => {
    return (
        <div className={styles['info-container']}>
            { children }
        </div>
    )
}

interface HeroProps {
    backgroundColor: string, 
    color: string,
    subheaderColor: string,
    text: string
}

const Hero: React.FC<HeroProps> = ({ backgroundColor, color, subheaderColor, text }) => {
    const style = {
        backgroundColor, 
        color: subheaderColor
    }

    return (
        <div className={styles['info__hero']} style={style}>
            <Header tag='h2' text={text} color={color} dot/>
            <p className={styles['info__hero__subheader']}>Lets go on a journey</p>
        </div>
    )
}

interface RowProps {
    children: React.ReactNode, 
    backgroundColor: string, 
    text: string
}

const Row: React.FC<RowProps> = ({ backgroundColor, children, text }) => {
    const style = {
        backgroundColor,
    }
    
    return (
        <div className={styles['info__row']} style={style}>
            { children }
        </div>
    )
}

const Frame: React.FC = () => <div className={styles['info__frame']} />

const Info = {
    Container, 
    Frame,
    Hero, 
    Row
}




export default Info