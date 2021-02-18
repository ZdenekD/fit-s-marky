import Picture from '../../UI/picture';
import styles from './logo.css';

const Logo: React.FC = () => (
    <div className={styles.logo} data-test="component-logo">
        <Picture src="/logo.png" width={901} height={507} alt="" />
    </div>
);

export default Logo;
