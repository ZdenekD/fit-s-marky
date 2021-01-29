import VariantsEnum from '../../types/VariantsEnum';
import styles from './button.module.css';

interface IButton {
    type?: 'button' | 'submit'
    disabled?: boolean
    variant?: VariantsEnum
    title?: string
    children: React.ReactNode
    classname?: string
    onClick?: (e: React.MouseEvent) => void,
}

const Button: React.FC<IButton> = ({
    type = 'button',
    disabled = false,
    variant = VariantsEnum.default,
    title = undefined,
    children,
    classname = '',
    onClick = undefined,
}) => (
    <button
        disabled={disabled}
        type={type}
        className={`${styles.button} ${styles[variant]} ${classname}`}
        aria-label={title}
        data-test="component-button"
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
