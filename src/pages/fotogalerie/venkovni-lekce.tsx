import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../../components/layout';
import Picture from '../../UI/picture';
import Anchor from '../../UI/anchor';
import icons, {IconsEnum} from '../../UI/icons';
import {list, item} from './helpers/animation';
import styles from './fotogalerie.module.css';

const Page: React.FC = () => (
    <Layout className={styles.layout}>
        <Link passHref href="/fotogalerie">
            <Anchor href="fotogalerie" className={styles.link}>{icons[IconsEnum.chevronLeft]()}</Anchor>
        </Link>
        <motion.ul
            className={styles.cards}
            initial="hidden"
            animate="show"
            variants={list}
        >
            <motion.li
                className={styles.card}
                variants={item}
            >
                <Picture src="/images/image-16.jpg"className={styles.picture} />
            </motion.li>
            <motion.li
                className={styles.card}
                variants={item}
            >
                <Picture src="/images/image-17.jpg"className={styles.picture} />
            </motion.li>
            <motion.li
                className={styles.card}
                variants={item}
            >
                <Picture src="/images/image-15.jpg"className={styles.picture} />
            </motion.li>
            <motion.li
                className={styles.card}
                variants={item}
            >
                <Picture src="/images/image-18.jpg"className={styles.picture} />
            </motion.li>
            <motion.li
                className={styles.card}
                variants={item}
            >
                <Picture src="/images/image-19.jpg"className={styles.picture} />
            </motion.li>
        </motion.ul>
    </Layout>
);

export default Page;
