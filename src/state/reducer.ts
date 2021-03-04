import IState from './type/state';
import IAction from './type/actions';
import frameReducer from './frame/reducer';
import messageReducer from './message/reducer';
import menuReducer from './menu/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    ...frameReducer({frame: state.frame}, action),
    ...messageReducer({message: state.message}, action),
    ...menuReducer({menu: state.menu}, action),
});

export default reducer;
