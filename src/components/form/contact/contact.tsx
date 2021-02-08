import Form from '../../../UI/form-control/form';
import Input from '../../../UI/form-control/input';

const ContactForm: React.FC = () => {
    console.log('FORM');

    return (
        <Form>
            <Input name="name" label="Jméno" />
            <Input name="email" label="E-mail" />
        </Form>
    );
};

export default ContactForm;
