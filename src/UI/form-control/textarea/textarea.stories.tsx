import VariantsEnum from '../../../types/VariantsEnum';
import Textarea from '.';

export default {title: 'UI/Textarea'};

export const base: React.FC = () => (
    <>
        <Textarea name="textarea" label="Textarea" />
        <Textarea name="textarea" label="Textarea" placeholder="Enter some data" />
    </>
);

export const variants: React.FC = () => (
    <>
        <Textarea name="textarea" label="Input" variant={VariantsEnum.success} />
        <Textarea name="textarea" label="Input" variant={VariantsEnum.info} />
        <Textarea name="textarea" label="Input" variant={VariantsEnum.warning} />
        <Textarea name="textarea" label="Input" variant={VariantsEnum.danger} />
    </>
);

export const disabled: React.FC = () => (
    <Textarea disabled name="textarea" label="Input" />
);

export const required: React.FC = () => (
    <Textarea required name="textarea" label="Input" />
);

export const error: React.FC = () => (
    <>
        <Textarea name="textarea" label="Input" error="has some error" />
        <Textarea required name="textarea" label="Input" error="has some error" />
    </>
);

export const maxLength: React.FC = () => (
    <Textarea name="textarea" label="Input" maxLength={255} />
);
