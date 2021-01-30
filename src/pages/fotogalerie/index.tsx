import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../../components/layout';
import Picture from '../../UI/picture';
import icons, {IconsEnum} from '../../UI/icons';
import {list, item} from '../../helpers/animation/list';
import styles from './fotogalerie.module.css';

const Page: React.FC = () => (
    <Layout>
        <motion.ul
            className={styles.cards}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={list}
        >
            <Link href="/fotogalerie/venkovni-lekce">
                <motion.li
                    className={styles.card}
                    variants={item}
                >
                    <h2 className={styles.heading}>Venkovní lekce</h2>
                    <Picture src="/images/image-15.jpg" className={styles.picture} />
                    <div className={styles.icon}>
                        {icons[IconsEnum.camera](36)}
                    </div>
                </motion.li>
            </Link>
            <Link href="/fotogalerie/lekce">
                <motion.li
                    className={styles.card}
                    variants={item}
                >
                    <h2 className={styles.heading}>Lekce pilates a jógy</h2>
                    <Picture src="/images/image-06.jpg" className={styles.picture} />
                    <div className={styles.icon}>
                        {icons[IconsEnum.camera](36)}
                    </div>
                </motion.li>
            </Link>
            <Link href="/fotogalerie/zdrava-strava">
                <motion.li
                    className={styles.card}
                    variants={item}
                >
                    <h2 className={styles.heading}>Zdravá strava</h2>
                    <Picture src="/images/image-13.jpg" className={styles.picture} />
                    <div className={styles.icon}>
                        {icons[IconsEnum.camera](36)}
                    </div>
                </motion.li>
            </Link>
        </motion.ul>
    </Layout>
);

export default Page;
