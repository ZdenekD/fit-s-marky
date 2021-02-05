import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import ContactForm from '../components/form/contact';
import {heading} from '../helpers/animation/heading';

const Page: React.FC = () => (
    <Layout>
        <Article>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Kontaktuje mne
            </motion.h2>
            <ContactForm />
        </Article>
    </Layout>
);

export default Page;
