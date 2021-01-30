import React from 'react';
import styles from './anchor.module.css';

interface IAnchor {
    href: string
    title?: string
    children: React.ReactNode
    target?: '_blank'
    className?: string
}

const Anchor = React.forwardRef<HTMLAnchorElement, IAnchor>(({
    href,
    title,
    children,
    target,
    className = '',
}, ref) => (
    <a
        ref={ref}
        href={href}
        title={title}
        className={`${styles.anchor} ${className}`}
        target={target}
        rel={target ? 'noreferrer noopener' : undefined}
        data-test="component-anchor"
    >
        {children}
    </a>
));

Anchor.displayName = 'Anchor';

export default Anchor;
