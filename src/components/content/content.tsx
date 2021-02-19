import React from 'react';
import {useStateValue} from '../../state';
import setMenu from '../../state/menu/actions';
import styles from './content.css';

interface IContent {
    children: React.ReactNode
    className?: string
}

const Content: React.FC<IContent> = ({children, className = ''}) => {
    const {dispatch} = useStateValue();

    React.useEffect(() => {
        dispatch(setMenu({menu: {isOpen: false}}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={`${styles.section} ${className}`} data-test="component-content">
            {children}
        </section>
    );
};

export default Content;
