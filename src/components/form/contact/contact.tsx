import React from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import send from '../../../api/send';
import Form from '../../../UI/form-control/form';
import Input from '../../../UI/form-control/input';
import Textarea from '../../../UI/form-control/textarea';
import Button from '../../../UI/form-control/button';
import Loader from '../../../UI/loader';
import {useGlobalState} from '../../../state';
import {saveMessage} from '../../../state/message/actions';
import regex from '../../../helpers/regex';
import VariantsEnum from '../../../enums/VariantsEnum';
import styles from './contact.css';

interface IValues {
    [key: string]: string
}

const ContactForm: React.FC = () => {
    const [isDisabled, setDisabled] = React.useState<boolean>(false);
    const router = useRouter();
    const [, dispatch] = useGlobalState();
    const {register, errors, handleSubmit} = useForm({mode: 'onBlur'});
    const onSubmit = async (values: IValues) => {
        setDisabled(true);

        if (values.med) {
            return;
        }

        const response = await send(values);

        if (response.message) {
            dispatch(saveMessage({
                message: {
                    variant: response.variant,
                    content: response.message,
                },
            }));
        }

        router.push('/');
    };

    return (
        <>
            {isDisabled && <Loader data-test="component-loader" />}
            <Form className={styles.form} data-test="component-contact" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register({
                        pattern: {
                            value: regex.name,
                            message: 'Jsou zadány nepovolené znaky.',
                        },
                    })}
                    required
                    name="name"
                    label="Jméno"
                    disabled={isDisabled}
                    maxlength={30}
                    error={errors.name?.message}
                />
                <Input
                    ref={register({
                        pattern: {
                            value: regex.email,
                            message: 'E-mail není zadán ve správném formátu.',
                        },
                    })}
                    required
                    name="email"
                    label="E-mail"
                    type="email"
                    disabled={isDisabled}
                    maxlength={90}
                    error={errors.email?.message}
                />
                <Textarea
                    ref={register({
                        pattern: {
                            value: regex.text,
                            message: 'Jsou zadány nepovolené znaky.',
                        },
                    })}
                    required
                    name="message"
                    label="Zpráva"
                    disabled={isDisabled}
                    maxlength={255}
                    error={errors.message?.message}
                />
                <Input
                    ref={register()}
                    name="med"
                    label="Med"
                    autoComplete="off"
                    className={styles.hidden}
                />
                <Button type="submit" variant={VariantsEnum.info} className={styles.submit} disabled={isDisabled}>Odeslat</Button>
            </Form>
        </>
    );
};

export default ContactForm;
