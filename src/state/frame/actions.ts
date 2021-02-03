import IFrame from './type/frame';
import ActionsEnum, {IAction} from './type/actions';

export default function saveFrame(value: IFrame): IAction {
    return {
        type: ActionsEnum.save,
        payload: value,
    };
}
