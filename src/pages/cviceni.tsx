import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import icons from '../UI/icons';
import IconsEnum from '../UI/icons/types/iconsEnum';
import {heading} from '../helpers/animation/heading';
import {list, item} from '../helpers/animation/list';
import styles from '../assets/styles/pages/excercises.module.css';

const Page: React.FC = () => (
    <Layout>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                <i className="icon">{icons[IconsEnum.chartBubble]()}</i>
                Kde cvicim
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
                    <strong>Úterý 19:00 - 20:00</strong> Pilates - TJ Sokol Jahodnice (Bezdrevská 26, Praha 9)
                </motion.li>
                <motion.li
                    className={styles.item}
                    variants={item}
                >
                    <strong>Neděle 19:30 - 20:30</strong> Jóga - TJ Sokol Jahodnice (Bezdrevská 26, Praha 9)
                </motion.li>
            </motion.ul>
        </Article>
    </Layout>
);

export default Page;
