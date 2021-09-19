import React from 'react'
import styles from './FlexWrapper.module.scss'
import classNames from 'classnames'

interface FlexWrapperProps {
    children: React.ReactNode, 
    name: string, 
    tag?: keyof JSX.IntrinsicElements, 
    screen?: boolean,
    center?: boolean,
    minHeight?: string
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
    const { children, name, tag, screen, center, minHeight } = props

    let Tag = tag ? tag : 'div'
    let otherClassNames = classNames(
        screen && styles['flex-wrapper--screen'],
        center && styles['flex-wrapper--center']
    )

    const style = {
        minHeight
    }

    return (
        <Tag className={classNames(styles['flex-wrapper'], name, otherClassNames)} style={style}>
            {children}
        </Tag>
    )
}

export default FlexWrapper