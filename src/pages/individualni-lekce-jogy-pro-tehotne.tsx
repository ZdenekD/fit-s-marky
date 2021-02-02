import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import {heading} from '../helpers/animation/heading';
import {fadeX} from '../helpers/animation/fade';

const Page: React.FC = () => (
    <Layout>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Jóga pro těhotné je určena pro každou ženu, která právě zjistila, že je těhotná.
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <p>
                    Cvičení je vhodné od
                    prvních dnů až do porodu, v jakémkoli stupni těhotenství. Dech, vhodné pozice a relaxační techniky jsou
                    základem jednotlivých sestav.
                </p>
                <p>
                    Tělo budeme protahovat a posilovat, navíc si budete umět pomoct od
                    bolestí a těhotenských obtíží.
                </p>
            </motion.div>
        </Article>
    </Layout>
);

export default Page;
