import IMessage from './type/message';
import ActionsEnum, {IAction} from './type/actions';
import VariantsEnum from '../../types/VariantsEnum';

export function saveMessage(value: IMessage): IAction {
    return {
        type: ActionsEnum.save,
        payload: value,
    };
}

export function removeMessage(): IAction {
    return {
        type: ActionsEnum.remove,
        payload: {
            message: {
                variant: VariantsEnum.info,
                content: '',
            },
        },
    };
}
