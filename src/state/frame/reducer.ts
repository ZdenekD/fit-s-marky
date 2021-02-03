import IState from '../type/state';
import IAction from '../type/actions';
import IFrame from './type/frame';
import ActionsEnum from './type/actions';

export const initialState: IFrame = {frame: {current: 0}};

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
