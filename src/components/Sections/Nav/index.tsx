import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import Phone from '../Phone'
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth'

interface NavProps {
    navOpen: boolean,
    phoneIsVisible: any,
    toggleAction: (event: React.MouseEvent<HTMLElement>) => void
}

const Nav: React.FC<NavProps> = ({ navOpen, phoneIsVisible, toggleAction }) => {

    const navInnerClassName = classNames(
        styles['nav__inner'], 
        navOpen && styles['nav__inner--nav-open']
    )

    const phoneContainerClassName = classNames(
        styles['phone-container'], 
        phoneIsVisible && styles['phone-container--hidden']
    )

    const device = useResponsiveWidth()
    const PhoneComp = (device === 'mobile') ? '' : <Phone type='tiny' />

    return (
        <nav className={styles['nav']}>
            <div className={navInnerClassName}>
                <h2 className={styles['nav__header']}>Home</h2>
                <div className={phoneContainerClassName}>
                    { PhoneComp }
                </div>
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