import Link from 'next/link';
import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import Button from '../UI/button';
import icons, {IconsEnum} from '../UI/icons';
import {useStateValue} from '../state';
import ActionsEnum from '../state/cursor/type/actions';
import VariantsEnum from '../types/VariantsEnum';
import {list, item} from '../helpers/animation/list';
import styles from './cenik.module.css';

const Page: React.FC = () => {
    const {dispatch} = useStateValue();
    const handleClick = (event: React.MouseEvent) => {
        dispatch({
            type: ActionsEnum.save,
            payload: {
                cursor: {
                    top: event.clientY,
                    left: event.clientX,
                },
            },
        });
    };

    return (
        <Layout>
            <Article>
                <motion.ul
                    className={styles.cards}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={list}
                >
                    <motion.li
                        className={styles.card}
                        variants={item}
                    >
                        <div className={styles.icons}>
                            {icons[IconsEnum.cobraPose]()}
                        </div>
                        <h2>Individuální lekce pilates (doma, kancelář)</h2>
                        <strong>500 Kč / hodina</strong>
                    </motion.li>
                    <motion.li
                        className={styles.card}
                        variants={item}
                    >
                        <div className={styles.icons}>
                            {icons[IconsEnum.warriorPose]()}
                        </div>
                        <h2>Individuální lekce jógy/powerjógy (doma, kancelář)</h2>
                        <strong>500 Kč / hodina</strong>
                    </motion.li>
                    <motion.li
                        className={styles.card}
                        variants={item}
                    >
                        <div className={styles.icons}>
                            {icons[IconsEnum.boatPose]()}
                            {icons[IconsEnum.boatPose]()}
                        </div>
                        <h2>Individuální lekce pilates/jógy/powerjógy pro dvojice</h2>
                        <strong>400 Kč / hodina | osoba</strong>
                    </motion.li>
                    <motion.li
                        className={styles.card}
                        variants={item}
                    >
                        <div className={styles.icons}>
                            {icons[IconsEnum.pranayamaPose]()}
                        </div>
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
                        <Button className={styles.button} variant={VariantsEnum.info} onClick={handleClick}>Kontaktujte mne</Button>
                    </motion.div>
                </Link>
            </Article>
        </Layout>
    );
};

export default Page;
