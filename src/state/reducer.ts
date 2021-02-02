import cursorReducer from './cursor/reducer';
import IState from './type/state';
import IAction from './type/actions';

const reducer = ({cursor}: IState, action: IAction): IState => (cursorReducer({cursor}, action));

export default reducer;
