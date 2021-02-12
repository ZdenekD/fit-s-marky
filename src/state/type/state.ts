import ICursor from '../cursor/type/cursor';
import IFrame from '../frame/type/frame';
import IMessage from '../message/type/message';
import IMenu from '../menu/type/menu';

type IState = ICursor & IFrame & IMessage & IMenu;

export default IState;
