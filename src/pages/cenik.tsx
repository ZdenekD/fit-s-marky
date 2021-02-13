import Link from 'next/link';
import {motion} from 'framer-motion';
import VariantsEnum from '../types/VariantsEnum';
import Layout from '../components/layout';
import Article from '../components/article';
import Button from '../UI/form-control/button';
import IconsEnum from '../UI/icons/types/iconsEnum';
import icons from '../UI/icons';
import {list, item} from '../helpers/animation/list';
import styles from '../assets/styles/pages/pricelist.module.css';

const Page: React.FC = () => (
    <Layout>
        <Article>
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
                    <i className={styles.icon}>
                        {icons[IconsEnum.cobraPose]()}
                    </i>
                    <h2>Individuální lekce pilates (doma, kancelář)</h2>
                    <strong>500 Kč / hodina</strong>
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <i className={styles.icon}>
                        {icons[IconsEnum.warriorPose]()}
                    </i>
                    <h2>Individuální lekce jógy/powerjógy (doma, kancelář)</h2>
                    <strong>500 Kč / hodina</strong>
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <i className={styles.icon}>
                        {icons[IconsEnum.boatPose]()}
                        {icons[IconsEnum.boatPose]()}
                    </i>
                    <h2>Individuální lekce pilates/jógy/powerjógy pro dvojice</h2>
                    <strong>400 Kč / hodina | osoba</strong>
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <i className={styles.icon}>
                        {icons[IconsEnum.pranayamaPose]()}
                    </i>
                    <h2>Individuální lekce jógy pro těhotné</h2>
                    <strong>600 Kč / hodina</strong>
                </motion.li>
            </motion.ul>
            <Link passHref href="/kontakt">
                <motion.div
                    initial={{opacity: 0, scale: 0.96}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{
                        opacity: 0,
                        scale: 0.96,
                        transition: {duration: 0.5, delay: 0.2},
                    }}
                    transition={{duration: 0.5, delay: 0.8}}
                >
                    <Button className={styles.button} variant={VariantsEnum.info}>
                        Kontaktuje mne
                    </Button>
                </motion.div>
            </Link>
        </Article>
    </Layout>
);

export default Page;
