import React from 'react'
import styles from './PageWrapper.module.scss'

interface PageWrapper {
    children: React.ReactNode
}
 
const PageWrapper: React.FC = props => {
const { children } = props

    return (
        <div className={styles['page-wrapper']}>
            {children}
        </div>
    )
}

export default PageWrapper
