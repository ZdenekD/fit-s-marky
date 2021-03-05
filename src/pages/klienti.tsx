import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import Clients from '../components/clients';
import icons from '../UI/icons';
import IconsEnum from '../UI/icons/types/iconsEnum';
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
                <i className="icon">{icons[IconsEnum.chartBubble]()}</i>
                Spokojení klienti
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <Clients />
            </motion.div>
        </Article>
    </Layout>
);

export default Page;
