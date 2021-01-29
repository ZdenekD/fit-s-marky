import styles from './anchor.module.css';

interface IAnchor {
    href: string
    title?: string
    children: React.ReactNode
    classname?: string
    target?: '_blank'
}

const Anchor: React.FC<IAnchor> = ({
    href,
    title,
    children,
    classname = '',
    target,
}) => (
    <a
        href={href}
        title={title}
        className={`${styles.anchor} ${classname}`}
        target={target}
        rel={target ? 'noreferrer noopener' : undefined}
        data-test="component-anchor"
    >
        {children}
    </a>
);

export default Anchor;
