import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../../components/layout';
import Anchor from '../../UI/anchor';
import Picture from '../../UI/picture';
import icons, {IconsEnum} from '../../UI/icons';
import {list, item} from '../../helpers/animation/list';
import styles from '../../assets/styles/pages/gallery.css';

const Page: React.FC = () => (
    <Layout>
        <motion.ul
            className={styles.list}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={list}
        >
            <motion.li
                className={`${styles.item} ${styles.mainItem}`}
                variants={item}
            >
                <Link passHref href="/fotogalerie/venkovni-lekce">
                    <Anchor href="/fotogalerie/venkovni-lekce" className={styles.link}>
                        <h2 className={styles.heading}>Venkovní lekce</h2>
                        <Picture src="/images/image-15" className={styles.picture} width={500} height={333} />
                        <i className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </i>
                    </Anchor>
                </Link>
            </motion.li>
            <motion.li
                className={`${styles.item} ${styles.mainItem}`}
                variants={item}
            >
                <Link href="/fotogalerie/lekce">
                    <Anchor href="/fotogalerie/lekce" className={styles.link}>
                        <h2 className={styles.heading}>Lekce pilates a jógy</h2>
                        <Picture src="/images/image-06" className={styles.picture} width={500} height={333} />
                        <i className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </i>
                    </Anchor>
                </Link>
            </motion.li>
            <motion.li
                className={`${styles.item} ${styles.mainItem}`}
                variants={item}
            >
                <Link href="/fotogalerie/zdrava-strava">
                    <Anchor href="/fotogalerie/zdrava-strava" className={styles.link}>
                        <h2 className={styles.heading}>Zdravá strava</h2>
                        <Picture src="/images/image-13" className={styles.picture} width={500} height={333} />
                        <i className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </i>
                    </Anchor>
                </Link>
            </motion.li>
        </motion.ul>
    </Layout>
);

export default Page;
