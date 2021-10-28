import React from 'react'
import styles from './PrettyLine.module.scss'
import { SETTINGS } from 'src/styles/settings'
import classNames from 'classnames'

interface PrettyLineProps {
    background?: boolean, 
    right?: boolean,
    top?: string, 
}

const PrettyLine: React.FC<PrettyLineProps> = ({ background, right, top }) => {
    const YELLOW = SETTINGS.secondary
    const lineClassNames = classNames(
        background && styles['pretty-line--background'], 
        background && right && styles['pretty-line--background--right']
    )
    const style = {
        top
    }

    return (
        <svg className={lineClassNames} style={style}
            xmlns="http://www.w3.org/2000/svg" width="1100px" height="160px" viewBox="0 0 1100 150">
            <rect x="0" y="25" width="1000" height="100" fill={YELLOW} rx="50" />
            <rect x="30" y="45" width="1000" height="100" fill="transparent" stroke={SETTINGS.primary} strokeWidth="4px" rx="50" />
        </svg>
    )
}

export default PrettyLine