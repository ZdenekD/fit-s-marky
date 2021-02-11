import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import Button from '../form-control/button';
import VariantsEnum from '../../types/VariantsEnum';
import {fade, fadeScale} from '../../helpers/animation/fade';
import styles from './alert.module.css';
import {useStateValue} from '../../state';
import ActionsEnum from '../../state/message/type/actions';

interface IAlert {
    children: React.ReactNode
    className?: string
    variant?: VariantsEnum
    timeout?: number
    isOpen?: boolean
}

const Alert: React.FC<IAlert> = ({
    children,
    variant,
    className = '',
    timeout,
    isOpen = false,
}) => {
    const [isOpened, setOpened] = React.useState(isOpen);
    const {dispatch} = useStateValue();
    const handleClick = () => {
        setOpened(false);
        dispatch({type: ActionsEnum.remove});
    };

    React.useEffect(() => {
        if (timeout) {
            setTimeout(() => {
                setOpened(false);
            }, timeout);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            {isOpened && (
                <>
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={fade}
                        className={styles.backdrop}
                    />
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={fadeScale}
                        className={`${styles.alert} ${variant ? styles[variant] : ''} ${className}`}
                        data-test="component-alert"
                    >
                        <Button aria-label="Zavřít" className={styles.button} onClick={handleClick}>&times;</Button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Alert;
