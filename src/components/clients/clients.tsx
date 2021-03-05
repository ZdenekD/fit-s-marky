import {motion} from 'framer-motion';
import clients from '../../data/clients';
import styles from './clients.css';

const Clients: React.FC = () => (
    <motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {duration: 1, delay: 0.4},
        }}
        exit={{opacity: 0}}
        className={styles.section}
        data-test="component-clients"
    >
        <ul className={styles.list}>
            {clients.map(client => (
                <li
                    key={client.id}
                    className={styles.item}
                >
                    {client.src ? (
                        <>
                            <img src={`/clients/${client.src}`} alt="" className={styles.image} /><br />
                            <span className={styles.title}>{client.title}</span>
                        </>
                    ) : (
                        <strong className={styles.title}>{client.title}</strong>
                    )}
                </li>
            ))}
        </ul>
    </motion.section>
);

export default Clients;
