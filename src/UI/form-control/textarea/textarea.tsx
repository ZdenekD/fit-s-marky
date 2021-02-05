import React from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../types/VariantsEnum';
import prefix from '../../../helpers/prefix';
import styles from './textarea.module.css';

interface ITextarea {
    name: string
    label: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxLength?: number
    className?: string
    error?: string
}

const Textarea: React.FC<ITextarea> = ({
    name,
    label,
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
    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
                <textarea
                    id={id}
                    name={name}
                    className={`${styles.textarea} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''} ${maxLength ? styles.textareaMaxlength : ''} ${className}`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    data-test="component-textarea"
                    onChange={handleInput}
                />

                {maxLength && (<span className={styles.maxlength}>{length} / {maxLength}</span>)}
            </div>
        </div>
    );
};

export default Textarea;
