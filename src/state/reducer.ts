import IState from './type/state';
import IAction from './type/actions';
import cursorReducer from './cursor/reducer';
import frameReducer from './frame/reducer';
import messageReducer from './message/reducer';
import menuReducer from './menu/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    cursor: {...cursorReducer(state, action).cursor},
    frame: {...frameReducer(state, action).frame},
    message: {...messageReducer(state, action).message},
    menu: {...menuReducer(state, action).menu},
});

export default reducer;
