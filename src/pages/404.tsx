import {motion} from 'framer-motion';
import {Player} from '@lottiefiles/react-lottie-player';
import Layout from '../components/layout';
import Article from '../components/article';
import {heading} from '../helpers/animation/heading';

const Error: React.FC = () => (
    <Layout>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Zadaná stránka neexistuje
            </motion.h2>
            <Player
                loop
                autoplay
                src="/animation_02.json"
            />
        </Article>
    </Layout>
);

export default Error;
