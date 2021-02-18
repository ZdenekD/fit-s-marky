import {motion, Variants} from 'framer-motion';
import {list} from '../../helpers/animation/list';
import styles from './list.css';

interface IList {
    variants?: Variants
    className?: string
    isAnimated?: boolean
}

const List: React.FC<IList> = ({
    variants = list,
    className = '',
    children,
    isAnimated = true,
}) => (
    <>
        {isAnimated ? (
            <motion.ul
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                className={`${styles.list} ${className}`}
            >
                {children}
            </motion.ul>
        ) : (
            <ul className={`${styles.list} ${className}`} data-test="component-list">
                {children}
            </ul>
        )}
    </>
);

export default List;
