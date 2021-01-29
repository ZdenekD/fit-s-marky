import styles from './article.module.css';

interface IArticle {
    children: React.ReactNode
    classname?: string
}

const Article: React.FC<IArticle> = ({
    children,
    classname = '',
}) => (
    <article className={`${styles.article} ${classname}`}>
        {children}
    </article>
);

export default Article;
