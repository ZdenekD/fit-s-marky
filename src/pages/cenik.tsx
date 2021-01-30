import Link from 'next/link';
import Layout from '../components/layout';
import Article from '../components/article';
import Button from '../UI/button';
import icons, {IconsEnum} from '../UI/icons';
import VariantsEnum from '../types/VariantsEnum';
import styles from './cenik.module.css';

const Page: React.FC = () => (
    <Layout>
        <Article>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.icons}>
                        {icons[IconsEnum.cobraPose]()}
                    </div>
                    <h2>Individuální lekce pilates (doma, kancelář)</h2>
                    <strong>500 Kč / hodina</strong>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                        {icons[IconsEnum.warriorPose]()}
                    </div>
                    <h2>Individuální lekce jógy/powerjógy (doma, kancelář)</h2>
                    <strong>500 Kč / hodina</strong>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                        {icons[IconsEnum.boatPose]()}
                        {icons[IconsEnum.boatPose]()}
                    </div>
                    <h2>Individuální lekce pilates/jógy/powerjógy pro dvojice</h2>
                    <strong>400 Kč / hodina | osoba</strong>
                </div>
                <div className={styles.card}>
                    <div className={styles.icons}>
                        {icons[IconsEnum.pranayamaPose]()}
                    </div>
                    <h2>Individuální lekce jógy pro těhotné</h2>
                    <strong>600 Kč / hodina</strong>
                </div>
            </div>
            <Link passHref href="/kontakt">
                <Button className={styles.button} variant={VariantsEnum.info}>Kontaktujte mne</Button>
            </Link>
        </Article>
    </Layout>
);

export default Page;
