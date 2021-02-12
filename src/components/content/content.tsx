import React from 'react';
import {useStateValue} from '../../state';
import ActionsEnum from '../../state/menu/type/actions';
import styles from './content.module.css';

interface IContent {
    children: React.ReactNode
    className?: string
}

const Content: React.FC<IContent> = ({children, className = ''}) => {
    const {dispatch} = useStateValue();

    React.useEffect(() => {
        console.log('CONTENT');

        dispatch({
            type: ActionsEnum.set,
            payload: {menu: {isOpen: false}},
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={`${styles.section} ${className}`} data-test="component-content">
            {children}
        </section>
    );
};

export default Content;
