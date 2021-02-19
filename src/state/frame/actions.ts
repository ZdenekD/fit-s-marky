import IFrame from './type';
import ActionsEnum, {IAction} from './type/actions';

export default function saveFrame(payload: IFrame): IAction {
    return {
        type: ActionsEnum.save,
        payload,
    };
}
