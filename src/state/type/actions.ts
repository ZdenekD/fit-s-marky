import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IFrameAction} from '../frame/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';

type IAction = ICursorAction | IFrameAction | IMessageAction;

export default IAction;
