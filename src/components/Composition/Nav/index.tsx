import React from 'react'
import PageWrapper from 'src/components/Wrappers/PageWrapper'
import styles from './index.module.scss'
import classNames from 'classnames'

interface NavProps {
    navOpen: boolean,
    toggleAction: (event: React.MouseEvent<HTMLElement>) => void
}

const Nav: React.FC<NavProps> = ({ navOpen, toggleAction }) => {
    const navInnerClassName = classNames(
        styles['nav__inner'], 
        navOpen && styles['nav__inner--nav-open']
    )

    return (
        <nav className={styles['nav']}>
            <div className={navInnerClassName}>
                <h2 className={styles['nav__header']}>Home</h2>
                <NavToggle navOpen={navOpen} action={toggleAction}/>
            </div>
            <NavItems navOpen={navOpen}/>
        </nav>

    )
}

interface NavItemsProps {
    navOpen: boolean,
}

const NavItems: React.FC<NavItemsProps> = ({ navOpen }) => {
    const className = classNames(
        styles['nav__item-list'], 
        navOpen && styles['nav__item-list--active']
    )

    return (
        <ul className={className}>
            <li className={styles['nav__item']}>
                Home
            </li>
            <li className={styles['nav__item']}>
                Coming Soon
            </li>
        </ul>
    )
}

interface NavToggleProps {
    navOpen: boolean,
    action: (event: React.MouseEvent<HTMLElement>) => void
}

const NavToggle: React.FC<NavToggleProps> = ({ navOpen, action }) => {
    

    const className = classNames(
        styles['nav__toggle'], 
        navOpen && styles['nav__toggle--collapse']
    )

    return (
        <div onClick={(e) => action(e)} className={className}>
            <div className={styles['nav__toggle__top']}/>
            <div className={styles['nav__toggle__middle']}/>
            <div className={styles['nav__toggle__bottom']}/>
        </div>
    )
}

export default Nav