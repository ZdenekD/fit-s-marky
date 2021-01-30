import Layout from '../components/layout';
import Article from '../components/article';
import styles from './certifikaty.module.css';

const Page: React.FC = () => (
    <Layout>
        <Article className={styles.article}>
            <h2>Certifikáty</h2>
            <p><strong>2011</strong> Certifikát instruktora aerobiku&nbsp;a&nbsp;fitness (FISAF)</p>
            <p><strong>2011</strong> Fitness instruktor Pilatesova metoda (Wellness school Evy Blahušové)</p>
            <p><strong>2012</strong> Bosu Core (Face Czech Academy)</p>
            <p><strong>2012</strong> Pilates pro speciální populaci – těhotné, děti, senioři (Wellness school Evy Blahušové)</p>
            <p><strong>2012</strong> Bodystyling (Wellness school Evy Blahušové)</p>
            <p><strong>2014</strong> Jóga základy (IQ Pohyb Academy)</p>
            <p><strong>2014</strong> Pilates Reformer Basic (Pilates Centrum – Kateřina Vaňková)</p>
            <p><strong>2014</strong> Pilates Reformer Advanced (Pilates Centrum – Kateřina Vaňková)</p>
            <p><strong>2014</strong> Pilates Reformer III. (Pilates Centrum – Kateřina Vaňková)</p>
            <p><strong>2014</strong> Poradce pro výživu (Nutris®)</p>
            <p><strong>2014</strong> Seminář tělesně nutriční diagnostika (Nutris®)</p>
            <p><strong>2015</strong> Pilates Reformer IV. (Pilates Centrum – Kateřina Vaňková)</p>
            <p><strong>2015</strong> Instruktor Pilates Reformer (Pilates Centrum – Kateřina Vaňková)</p>
            <p><strong>2015</strong> Dětská výživa (Nutris®)</p>
            <p><strong>2020</strong> Joga pro těhotné (FISAF)</p>
            <p><strong>2021</strong> Kurz První pomoc dítěti (MK life)</p>
        </Article>
    </Layout>
);

export default Page;
