import Image from 'next/image';
import styles from './logo.module.css';

const Logo: React.FC = () => (
    <div className={styles.logo}>
        <Image src="/logo.png" width="901" height="507" alt="" />
    </div>
);

export default Logo;
