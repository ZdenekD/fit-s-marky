import styles from './form.module.css';

interface IForm {
    onSubmit?: () => void
}

const Form: React.FC<IForm> = ({children, onSubmit}) => (
    <form className={styles.form} data-test="component-form" onSubmit={onSubmit}>
        {children}
    </form>
);

export default Form;
