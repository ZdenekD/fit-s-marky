import IState from './type/state';
import IAction from './type/actions';
import cursorReducer from './cursor/reducer';
import frameReducer from './frame/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    cursor: {...cursorReducer(state, action).cursor},
    frame: {...frameReducer(state, action).frame},
});

export default reducer;
