import {motion} from 'framer-motion';
import Layout from '../components/layout';
import Article from '../components/article';
import List from '../UI/list';
import Item from '../UI/list/item';
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
                Chci instruktora jen pro sebe = soukromá lekce&nbsp;v&nbsp;kanceláři nebo&nbsp;u&nbsp;Vás doma
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <List>
                    <Item>
                        Chcete se nejdříve správně naučit pozice&nbsp;a&nbsp;cviky, než půjdete do skupinové lekce?
                    </Item>
                    <Item>Chcete cvičit pilates, ale nevyhovují Vám časy studiových hodin ve fitness centrech?</Item>
                    <Item>Nechcete cvičit ve skupinové lekci?</Item>
                    <Item>Chcete, aby Vám byly lekce Pilates přizpůsobeny na míru?</Item>
                    <Item>Máte zdravotní problémy: skoliózu, nadváhu, trpíte inkontinencí &hellip;?</Item>
                    <Item>Chcete provádět cviky správně tak, aby mělo cvičení maximální účinek právě na Vás?</Item>
                </List>
                <p>Využijte možnosti individuální lekce.</p>
                <p>
                    Po celou dobu&nbsp;<strong>individuální lekce</strong>&nbsp;se věnuji pouze Vám –
                    Vaší kondici, zdravotnímu stavu&nbsp;i&nbsp;přáním přizpůsobuji nejen dlouhodobý cvičební program, ale také každou jednotlivou hodinu.
                </p>
            </motion.div>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Další výhody individuální lekce:
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <List>
                    <Item>Cvičební program je sestaven na základě zdravotního stavu, potřeb&nbsp;a&nbsp;přání klienta.</Item>
                    <Item>Termín konání lekce vychází především&nbsp;z&nbsp;přání klienta.</Item>
                    <Item>Pro objektivní posouzení výsledků je možné na přání klienta vést fotodokumentaci.</Item>
                    <Item>Využití cvičební pomůcek:
                        <List>
                            <Item>bosu</Item>
                            <Item>fitball</Item>
                            <Item>overball</Item>
                            <Item>magic circle</Item>
                            <Item>thera-band</Item>
                            <Item>core band</Item>
                            <Item>pilates towel</Item>
                        </List>
                    </Item>
                </List>
            </motion.div>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                Co je PILATES?
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <p>
                    Cvičební systém, který rovnoměrně posiluje tělo&nbsp;a&nbsp;zlepšuje jeho držení. Důraz je přitom kladen na správné dýchání,
                    koncentraci, kontrolu pohybů, přesnost&nbsp;a&nbsp;plynulost cviků.
                </p>
                <p>Cviky se zaměřují na posílení tzv. silného centra (oblast beder, břicha od pupku dolů a hýždí), ze kterého všechny pohyby vycházejí.</p>
                <p>Rehabilitační metoda je doporučována lékaři&nbsp;a&nbsp;je vhodná pro každý věk pro ženy i muže.</p>
            </motion.div>
            <motion.h2
                initial="initial"
                animate="enter"
                exit="exit"
                variants={heading}
            >
                10 důvodů proč cvičit PILATES
            </motion.h2>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeX}
            >
                <List>
                    <Item>získáte ploché břicho&nbsp;a&nbsp;štíhlý pas</Item>
                    <Item>zbavíte se tukových polštářků</Item>
                    <Item>odstraníte bolesti&nbsp;v&nbsp;zádech</Item>
                    <Item>pořídíte si dlouhé&nbsp;a&nbsp;štíhlé nohy</Item>
                    <Item>zpevníte si tělo&nbsp;a&nbsp;zlepšíte jeho držení</Item>
                    <Item>zbavíte se stresu&nbsp;a&nbsp;únavy</Item>
                    <Item>naučíte se správně dýchat</Item>
                    <Item>odstraníte svalové disbalance</Item>
                    <Item>budete lépe spát</Item>
                    <Item>zlepšíte si kondici</Item>
                </List>
            </motion.div>
        </Article>
    </Layout>
);

export default Page;
