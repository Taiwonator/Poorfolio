import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import PrettyLine from '../PrettyLine/PrettyLine'

interface HeaderProps {
    color?: string,
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    text: string, 
}

const Header: React.FC<HeaderProps> = ({ color, tag, text }) => {
    const Tag = tag
    const className = classNames(
        styles['header'], 
        (tag === 'h1') && styles['header--large'],
        (tag === 'h2') && styles['header--medium'],
        (tag === 'h3') && styles['header--small']
    )

    const style = {
        color
    }
    
    return (
        <Tag className={className} style={style}>{ text }</Tag>
    )    
}

export default Header