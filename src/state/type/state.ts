import ICursor from '../cursor/type/cursor';
import IFrame from '../frame/type/frame';
import IMessage from '../message/type/message';

type IState = ICursor & IFrame & IMessage;

export default IState;
