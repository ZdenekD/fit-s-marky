import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
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
                O mně
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <p>
                    Jmenuji se&nbsp;Markéta&nbsp;Hříbalová a&nbsp;pocházím z&nbsp;Prahy.
                </p>
                <p>
                    Již v&nbsp;rámci studia vysoké školy jsem se&nbsp;zajímala o&nbsp;zdravou výživu
                    a&nbsp;zdravý životní styl, až se&nbsp;tato záliba stala nejen mým koníčkem, ale i&nbsp;zaměstnáním.
                </p>
                <p>
                    Stala jsem se&nbsp;zkušenou instruktorkou pilates, jemné jógy, office jógy a&nbsp;jógy pro těhotné.
                </p>
            </motion.div>
        </Article>
    </Layout>
);

export default Page;
