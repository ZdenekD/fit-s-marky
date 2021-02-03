import ICursor from './type/cursor';
import ActionsEnum, {IAction} from './type/actions';

export default function savePosition(value: ICursor): IAction {
    return {
        type: ActionsEnum.save,
        payload: value,
    };
}
