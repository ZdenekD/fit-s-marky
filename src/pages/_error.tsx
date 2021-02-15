import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import Anchor from '../UI/anchor';
import {heading} from '../helpers/animation/heading';
import {fadeX} from '../helpers/animation/fade';

const Error: React.FC = () => (
    <Layout>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Někde se stala chyba.
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                Pokud potíže přetrvávají, kontaktujte <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Chyba na webu fit-s-marky.cz &clubs;">správce</Anchor>.
            </motion.div>
        </Article>
    </Layout>
);

export default Error;
