import {Player} from '@lottiefiles/react-lottie-player';
import styles from './aside.module.css';

const Aside: React.FC = () => (
    <aside className={styles.aside}>
        <div className={styles.animation}>
            <Player
                autoplay
                loop
                src="/animation_01.json"
            />
        </div>
    </aside>
);

export default Aside;
