import IMenu from './type/menu';
import ActionsEnum, {IAction} from './type/actions';

export default function setMenu(value: IMenu): IAction {
    return {
        type: ActionsEnum.set,
        payload: value,
    };
}
