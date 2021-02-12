import {IAction as ICursorAction} from '../cursor/type/actions';
import {IAction as IFrameAction} from '../frame/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';
import {IAction as IMenuAction} from '../menu/type/actions';

type IAction = ICursorAction | IFrameAction | IMessageAction | IMenuAction;

export default IAction;
