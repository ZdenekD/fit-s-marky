import React from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../types/VariantsEnum';
import prefix from '../../../helpers/prefix';
import styles from './input.module.css';

interface IInput {
    name: string
    label: string
    type?: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxLength?: number
    className?: string
    error?: string
}

const Input: React.FC<IInput> = ({
    name,
    label,
    type = 'text',
    placeholder,
    variant,
    required,
    disabled,
    maxLength,
    className = '',
    error,
}) => {
    const [length, setLength] = React.useState(0);
    const [id] = useId(1, prefix);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(event.target.value.length);
    };

    return (
        <div className={styles.control}>
            <label htmlFor={id} className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
                {label}
                {required && (<sup className={styles.required}>*</sup>)}
                {error && (<span className={styles.error}>{error}</span>)}
            </label>

            <div className={styles.wrapper}>
                <input
                    id={id}
                    type={type}
                    name={name}
                    className={`${styles.input} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    data-test="component-input"
                    onChange={handleInput}
                />

                {maxLength && (<span className={styles.maxlength}>{length} / {maxLength}</span>)}
            </div>
        </div>
    );
};

export default Input;
