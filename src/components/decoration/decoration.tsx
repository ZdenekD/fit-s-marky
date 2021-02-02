import React from 'react';
import useEventListener from '@use-it/event-listener';
import {useStateValue} from '../../state';
import icons, {IconsEnum} from '../../UI/icons';
import styles from './decoration.module.css';

const Decoration: React.FC = () => {
    const {state} = useStateValue();
    const icon1Ref = React.useRef<HTMLElement>(null);
    const icon2Ref = React.useRef<HTMLElement>(null);
    const icon3Ref = React.useRef<HTMLElement>(null);
    const icon4Ref = React.useRef<HTMLElement>(null);
    const icon5Ref = React.useRef<HTMLElement>(null);
    const icon6Ref = React.useRef<HTMLElement>(null);
    const icon7Ref = React.useRef<HTMLElement>(null);
    const icon8Ref = React.useRef<HTMLElement>(null);
    const setProperty = (element: HTMLElement, clientX: number, clientY: number) => {
        element.style.setProperty('--clientX', `${clientX / 24}px`);
        element.style.setProperty('--clientY', `${clientY / 16}px`);
    };
    const handleIcons = ({top, left}: {top: number, left: number}) => {
        if (icon1Ref.current) {
            setProperty(icon1Ref.current, left, top);
        }

        if (icon2Ref.current) {
            setProperty(icon2Ref.current, left, top);
        }

        if (icon3Ref.current) {
            setProperty(icon3Ref.current, left, top);
        }

        if (icon4Ref.current) {
            setProperty(icon4Ref.current, left, top);
        }

        if (icon5Ref.current) {
            setProperty(icon5Ref.current, left, top);
        }

        if (icon6Ref.current) {
            setProperty(icon6Ref.current, left, top);
        }

        if (icon7Ref.current) {
            setProperty(icon7Ref.current, left, top);
        }

        if (icon8Ref.current) {
            setProperty(icon8Ref.current, left, top);
        }
    };
    const handleMouseMove = (event: MouseEvent) => {
        const {clientX, clientY} = event;

        handleIcons({top: clientY, left: clientX});
    };

    useEventListener('mousemove', handleMouseMove);

    React.useEffect(() => {
        handleIcons({...state.cursor});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <>
            <i ref={icon1Ref} className={styles.decoration1}>{icons[IconsEnum.decoration1]()}</i>
            <i ref={icon2Ref} className={styles.decoration2}>{icons[IconsEnum.decoration2]()}</i>
            <i ref={icon3Ref} className={styles.decoration3}>{icons[IconsEnum.decoration3]()}</i>
            <i ref={icon4Ref} className={styles.decoration4}>{icons[IconsEnum.decoration4]()}</i>
            <i ref={icon5Ref} className={styles.decoration5}>{icons[IconsEnum.decoration5]()}</i>
            <i ref={icon6Ref} className={styles.decoration6}>{icons[IconsEnum.decoration6]()}</i>
            <i ref={icon7Ref} className={styles.decoration7}>{icons[IconsEnum.decoration7]()}</i>
            <i ref={icon8Ref} className={styles.decoration8}>{icons[IconsEnum.decoration8]()}</i>
        </>
    );
};

export default Decoration;
