import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../../components/layout';
import Anchor from '../../UI/anchor';
import Picture from '../../UI/picture';
import icons, {IconsEnum} from '../../UI/icons';
import {list, item} from '../../helpers/animation/list';
import styles from '../../assets/styles/pages/gallery.module.css';

const Page: React.FC = () => (
    <Layout>
        <motion.ul
            className={styles.list}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={list}
        >
            <Link passHref href="/fotogalerie/venkovni-lekce">
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <Anchor href="/fotogalerie/venkovni-lekce" className={styles.link}>
                        <h2 className={styles.heading}>Venkovní lekce</h2>
                        <Picture src="/images/image-15.jpg" className={styles.picture} />
                        <div className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </div>
                    </Anchor>
                </motion.li>
            </Link>
            <Link href="/fotogalerie/lekce">
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <Anchor href="/fotogalerie/lekce" className={styles.link}>
                        <h2 className={styles.heading}>Lekce pilates a jógy</h2>
                        <Picture src="/images/image-06.jpg" className={styles.picture} />
                        <div className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </div>
                    </Anchor>
                </motion.li>
            </Link>
            <Link href="/fotogalerie/zdrava-strava">
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <Anchor href="/fotogalerie/zdrava-strava" className={styles.link}>
                        <h2 className={styles.heading}>Zdravá strava</h2>
                        <Picture src="/images/image-13.jpg" className={styles.picture} />
                        <div className={styles.icon}>
                            {icons[IconsEnum.camera](36)}
                        </div>
                    </Anchor>
                </motion.li>
            </Link>
        </motion.ul>
    </Layout>
);

export default Page;
