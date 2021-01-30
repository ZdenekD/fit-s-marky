import styles from './content.module.css';

interface IContent {
    children: React.ReactNode
    className?: string
}

const Content: React.FC<IContent> = ({children, className}) => (
    <section className={`${styles.section} ${className}`} data-test="component-content">
        {children}
    </section>
);

export default Content;
