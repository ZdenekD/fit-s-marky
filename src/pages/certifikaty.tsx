import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import List from '../UI/list';
import Item from '../UI/list/item';
import {heading} from '../helpers/animation/heading';
import {list, item} from '../helpers/animation/list';
import styles from '../assets/styles/pages/certificates.module.css';

const Page: React.FC = () => (
    <Layout className={styles.certificates}>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Certifikáty
            </motion.h2>
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
                    <strong>2021</strong> Kurz První pomoc dítěti (MK life)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2020</strong> Joga pro těhotné (FISAF)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2015</strong> Dětská výživa (Nutris®)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2015</strong> Instruktor Pilates Reformer (Pilates Centrum – Kateřina Vaňková)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2015</strong> Pilates Reformer IV. (Pilates Centrum – Kateřina Vaňková)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Seminář tělesně nutriční diagnostika (Nutris®)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Poradce pro výživu (Nutris®)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Pilates Reformer III. (Pilates Centrum – Kateřina Vaňková)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Pilates Reformer Advanced (Pilates Centrum – Kateřina Vaňková)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Pilates Reformer Basic (Pilates Centrum – Kateřina Vaňková)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2014</strong> Jóga základy (IQ Pohyb Academy)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2012</strong> Bodystyling (Wellness school Evy Blahušové)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2012</strong> Pilates pro speciální populaci – těhotné, děti, senioři (Wellness school Evy Blahušové)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2012</strong> Bosu Core (Face Czech Academy)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2011</strong> Fitness instruktor Pilatesova metoda (Wellness school Evy Blahušové)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>2011</strong> Certifikát instruktora aerobiku&nbsp;a&nbsp;fitness (FISAF)
                </motion.li>
            </motion.ul>
        </Article>
    </Layout>
);

export default Page;
