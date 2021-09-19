import React from 'react'
import styles from './PageWrapper.module.scss'
import classNames from 'classnames'
interface PageWrapperProps {
    children: React.ReactNode, 
    navOpen: boolean
}
 
const PageWrapper: React.FC<PageWrapperProps> = ({ children, navOpen }) => {
const className = classNames(
    styles['page-wrapper'],
    (navOpen && styles['page-wrapper--nav-open'])
)

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default PageWrapper
