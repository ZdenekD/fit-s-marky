import styles from './article.module.css';

interface IArticle {
    children: React.ReactNode
    className?: string
}

const Article: React.FC<IArticle> = ({
    children,
    className = '',
}) => (
    <article className={`${styles.article} ${className}`}>
        {children}
    </article>
);

export default Article;
