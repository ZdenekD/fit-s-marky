import IState from './type/state';
import IAction from './type/actions';
import frameReducer from './frame/reducer';
import messageReducer from './message/reducer';
import menuReducer from './menu/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    frame: {...frameReducer(state, action).frame},
    message: {...messageReducer(state, action).message},
    menu: {...menuReducer(state, action).menu},
});

export default reducer;
