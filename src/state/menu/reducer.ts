import IState from '../type/state';
import IAction from '../type/actions';
import ActionsEnum from './type/actions';
import IMenu from './type/menu';

export const initialState: IMenu = {menu: {isOpen: false}};

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionsEnum.set:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default reducer;
