import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import {list, item} from '../helpers/animation/list';
import {heading} from '../helpers/animation/heading';
import styles from './cviceni.module.css';

const Page: React.FC = () => {
    const updatedList = {
        ...list,
        ...{
            enter: {
                ...list.enter,
                transition: {
                    ...list.enter.transition,
                    staggerChildren: 0.1,
                },
            },
            exit: {
                ...list.exit,
                transition: {duration: 0.1},
            },
        },
    };

    return (
        <Layout>
            <Article>
                <motion.h2
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={heading}
                >
                    Kde cvicim
                </motion.h2>
                <motion.ul
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={updatedList}
                >
                    <motion.li className={styles.item} variants={item}>
                        <strong>Úterý 19:00 - 20:00</strong> Pilates - TJ Sokol Jahodnice (Bezdrevská 26, Praha 9)
                    </motion.li>
                    <motion.li className={styles.item} variants={item}>
                        <strong>Neděle 19:30 - 20:30</strong> Jóga - TJ Sokol Jahodnice (Bezdrevská 26, Praha 9)
                    </motion.li>
                </motion.ul>
            </Article>
        </Layout>
    );
};

export default Page;
