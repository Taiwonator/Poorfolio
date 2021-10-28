import React from 'react'
import styles from './AbsoluteWrapper.module.scss'
import classNames from 'classnames'

interface FlexWrapperProps {
    children: React.ReactNode, 
}

const AbsoluteWrapper: React.FC<FlexWrapperProps> = props => {
    const { children } = props

    let className = classNames(
        styles['absolute-wrapper']
    )

    return (
        <div className={className}>
            {children}
            Hello
        </div>
    )
}

export default AbsoluteWrapper