import ICursor from './type/cursor';
import ActionsEnum, {ActionType} from './type/actions';

export default function savePosition(value: ICursor):ActionType {
    return {
        type: ActionsEnum.save,
        payload: value,
    };
}
