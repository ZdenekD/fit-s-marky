import VariantsEnum from '../../../types/VariantsEnum';

type IMessage = {
    message: {
        variant: VariantsEnum
        content: string | undefined
    }
}

export default IMessage;
