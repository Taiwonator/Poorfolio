import React from 'react'
import PageWrapper from 'src/components/Wrappers/PageWrapper'
import styles from './index.module.scss'

const Navbar: React.FC = props => {
    return (
        <nav className={styles['nav']}>
            <div className={styles['nav__inner']}>
                <h2 className={styles['nav__header']}>Home</h2>
                <ul className={styles['nav__item-list']}>
                    <li className={styles['nav__item']}>
                        Item 1
                    </li>
                    <li className={styles['nav__item']}>
                        Item 2
                    </li>
                    <li className={styles['nav__item']}>
                        Item 3
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar