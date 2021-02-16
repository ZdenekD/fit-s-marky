import {IAction as IFrameAction} from '../frame/type/actions';
import {IAction as IMessageAction} from '../message/type/actions';
import {IAction as IMenuAction} from '../menu/type/actions';

type IAction = IFrameAction | IMessageAction | IMenuAction;

export default IAction;
