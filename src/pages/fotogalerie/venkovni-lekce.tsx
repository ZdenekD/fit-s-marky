import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../../components/layout';
import Picture from '../../UI/picture';
import icons, {IconsEnum} from '../../UI/icons';
import {list, item} from '../../helpers/animation/list';
import {fadeY} from '../../helpers/animation/fade';
import styles from '../../assets/styles/pages/gallery.css';

const Page: React.FC = () => (
    <Layout className={styles.layout}>
        <Link passHref href="/fotogalerie">
            <motion.a
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeY}
                href="/fotogalerie"
                className={styles.back}
                aria-label="Zpět"
            >
                {icons[IconsEnum.chevronLeft]()}
            </motion.a>
        </Link>
        <motion.ul
            className={styles.list}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={list}
        >
            <motion.li
                className={styles.item}
                variants={item}
            >
                <Picture src="/images/image-16" className={styles.picture} width={500} height={333} />
            </motion.li>
            <motion.li
                className={styles.item}
                variants={item}
            >
                <Picture src="/images/image-17" className={styles.picture} width={500} height={333} />
            </motion.li>
            <motion.li
                className={styles.item}
                variants={item}
            >
                <Picture src="/images/image-15" className={styles.picture} width={500} height={333} />
            </motion.li>
            <motion.li
                className={styles.item}
                variants={item}
            >
                <Picture src="/images/image-18" className={styles.picture} width={500} height={333} />
            </motion.li>
            <motion.li
                className={styles.item}
                variants={item}
            >
                <Picture src="/images/image-19" className={styles.picture} width={500} height={333} />
            </motion.li>
        </motion.ul>
    </Layout>
);

export default Page;
