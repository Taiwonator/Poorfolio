import React from 'react'
import styles from './FlexWrapper.module.scss'
import classNames from 'classnames'

interface FlexWrapperProps {
    children: React.ReactNode, 
    name: string, 
    tag?: keyof JSX.IntrinsicElements, 
    section?: boolean,
    center?: boolean,
    bottom?: boolean,
    minHeight?: string
}

const FlexWrapper: React.FC<FlexWrapperProps> = props => {
    const { children, name, tag, section, center, bottom, minHeight } = props

    let Tag = tag ? tag : 'div'
    let otherClassNames = classNames(
        section && styles['flex-wrapper--section'],
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