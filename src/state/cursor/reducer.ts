import IState from '../type/state';
import IAction from '../type/actions';
import ICursor from './type/cursor';
import ActionsEnum from './type/actions';

export const initialState: ICursor = {
    cursor: {
        top: 0,
        left: 0,
    },
};

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionsEnum.save:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default reducer;