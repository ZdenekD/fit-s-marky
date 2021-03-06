import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import {AnimationItem} from 'lottie-web';
import {motion} from 'framer-motion';
import {useGlobalState} from '../../state';
import saveFrame from '../../state/frame/actions';
import styles from './aside.css';

const Aside: React.FC = () => {
    const [state, dispatch] = useGlobalState();
    const playerRef = React.useRef(null);
    const frameRef = React.useRef(0);
    const animationRef = React.useRef({});
    const handleAnimation = (instance: AnimationItem) => {
        instance.goToAndPlay(frameRef.current, true);

        animationRef.current = instance;
    };

    frameRef.current = state.frame.current;

    React.useEffect(() => () => {
        dispatch(saveFrame({frame: {current: (animationRef.current as AnimationItem).currentFrame || 0}}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            initial={{opacity: 0.25}}
            animate={{opacity: 1, transition: {duration: 2}}}
            exit={{opacity: 0.25, transition: {duration: 0.4}}}
            className={styles.aside}
            data-test="component-aside"
        >
            <Player
                ref={playerRef}
                loop
                lottieRef={handleAnimation}
                src="/animation_01.json"
            />
        </motion.div>
    );
};

export default Aside;
