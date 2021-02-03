import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import {AnimationItem} from 'lottie-web';
import {useStateValue} from '../../state';
import styles from './aside.module.css';
import ActionsEnum from '../../state/frame/type/actions';

const Aside: React.FC = () => {
    const {state, dispatch} = useStateValue();
    const playerRef = React.useRef(null);
    const frameRef = React.useRef(0);
    const animationRef = React.useRef({});
    const handleAnimation = (instance: AnimationItem) => {
        instance.goToAndPlay(frameRef.current, true);

        animationRef.current = instance;
    };

    frameRef.current = state.frame.current;

    React.useEffect(() => () => {
        dispatch({
            type: ActionsEnum.save,
            payload: {frame: {current: (animationRef.current as AnimationItem).currentFrame || 0}},
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <aside className={styles.aside}>
            <div className={styles.animation}>
                <Player
                    ref={playerRef}
                    loop
                    lottieRef={handleAnimation}
                    src="/animation_01.json"
                />
            </div>
        </aside>
    );
};

export default Aside;
