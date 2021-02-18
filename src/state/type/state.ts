import IFrame from '../frame/type';
import IMessage from '../message/type';
import IMenu from '../menu/type';

type IState = IFrame & IMessage & IMenu;

export default IState;
