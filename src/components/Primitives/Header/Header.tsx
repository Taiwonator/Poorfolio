import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import PrettyLine from '../PrettyLine/PrettyLine'

interface HeaderProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    text: string, 
}

const Header: React.FC<HeaderProps> = ({ tag, text }) => {
    const Tag = tag
    const className = classNames(
        styles['header'], 
        (tag === 'h1') && styles['header--large'],
        (tag === 'h2') && styles['header--medium'],
        (tag === 'h3') && styles['header--small']
    )
    
    return (
        <Tag className={className}>{ text }</Tag>
    )    
}

export default Header