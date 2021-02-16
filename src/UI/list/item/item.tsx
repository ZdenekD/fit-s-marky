import {motion, Variants} from 'framer-motion';
import {item} from '../../../helpers/animation/list';
import styles from './item.module.css';

interface IItem {
    variants?: Variants
    className?: string
    isAnimated?: boolean
}

const Item: React.FC<IItem> = ({
    variants = item,
    className = '',
    children,
    isAnimated = true,
}) => (
    <>
        {isAnimated ? (
            <motion.li
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                className={`${styles.item} ${className}`}
            >
                {children}
            </motion.li>
        ) : (
            <li className={`${styles.item} ${className}`} data-test="component-item">
                {children}
            </li>
        )}
    </>
);

export default Item;
