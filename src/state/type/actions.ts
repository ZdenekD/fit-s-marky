import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IFrameAction} from '../frame/type/actions';

type IAction = ICursorAction | IFrameAction

export default IAction;
