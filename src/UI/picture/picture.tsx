import styles from './picture.css';

interface IPicture {
    src: string
    width?: number
    height?: number
    alt?: string
    className?: string
}

const Picture: React.FC<IPicture> = ({
    src,
    width,
    height,
    alt = '',
    className = '',
}) => (
    <picture className={styles.picture}>
        <source srcSet={`${src}.avif`} type="image/avif" />
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
            src={`${src}.jpg`}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`${styles.image} ${className || ''}`}
        />
    </picture>
);

export default Picture;
