import React from 'react';
import {motion, SVGMotionProps} from 'framer-motion';
import {useGlobalState} from '../../state';
import setMenu from '../../state/menu/actions';
import styles from './menu.css';

const Menu: React.FC = () => {
    const [state, dispatch] = useGlobalState();
    const handleClick = () => {
        dispatch(setMenu({menu: {isOpen: !state.menu.isOpen}}));
    };
    const Path = (props: SVGMotionProps<SVGPathElement>) => (<motion.path {...props} />);

    return (
        <motion.button
            initial={false}
            animate={state.menu.isOpen ? 'open' : 'closed'}
            className={styles.menu}
            aria-label='menu'
            type="button"
            data-test="component-menu"
            onClick={handleClick}
        >
            <svg
                className={styles.icon}
                viewBox='0 0 100 100'
            >
                <Path
                    d="M30,40 L70,40 Z"
                    variants={{
                        open: {d: 'M38,60 L62,40 Z'},
                        close: {d: 'M30,40 L70,40 Z'},
                    }}
                />
                <Path
                    d="M30,50 L70,50 Z"
                    variants={{
                        open: {opacity: 0},
                        close: {opacity: 1},
                    }}
                    transition={{duration: 0.1}}
                />
                <Path
                    d="M30,60 L70,60 Z"
                    variants={{
                        open: {d: 'M38,40 L62,60 Z'},
                        close: {d: 'M30,60 L70,60 Z'},
                    }}
                />
            </svg>
        </motion.button>
    );
};

export default Menu;
