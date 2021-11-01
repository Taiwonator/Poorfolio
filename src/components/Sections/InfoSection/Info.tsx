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
    text: string
}

const Hero: React.FC<HeroProps> = ({ backgroundColor, color, text }) => {
    const style = {
        color, 
        backgroundColor
    }

    return (
        <h2 className={styles['info__hero']} style={style}>
            { text }
        </h2>
        
    )
}

interface RowProps extends HeroProps {
    children: React.ReactNode, 
    headerColor: string
}

const Row: React.FC<RowProps> = ({ backgroundColor, children, color, headerColor, text }) => {
    const style = {
        backgroundColor,
        color
    }
    
    return (
        <div className={styles['info__row']} style={style}>
            <Header tag='h3' text={text} color={headerColor} />
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