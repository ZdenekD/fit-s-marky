import styles from './content.module.css';

interface IContent {
    children: React.ReactNode
}

const Content: React.FC<IContent> = ({children}) => (
    <section className={styles.section} data-test="component-content">
        {children}
    </section>
);

export default Content;
