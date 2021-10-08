import React from 'react'
import styles from './FlexWrapper.module.scss'
import classNames from 'classnames'

interface FlexWrapperProps {
    children: React.ReactNode, 
    name: string, 
    tag?: keyof JSX.IntrinsicElements, 
    screen?: boolean,
    center?: boolean,
    bottom?: boolean,
    minHeight?: string
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
    const { children, name, tag, screen, center, bottom, minHeight } = props

    let Tag = tag ? tag : 'div'
    let otherClassNames = classNames(
        screen && styles['flex-wrapper--screen'],
        center && styles['flex-wrapper--center'],
        bottom && styles['flex-wrapper--bottom']
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