import IState from '../type/state';
import ICursor from './type/cursor';
import ActionsEnum, {ActionType} from './type/actions';

export const initialState: ICursor = {
    cursor: {
        top: 0,
        left: 0,
    },
};

const reducer = (state: IState = initialState, action: ActionType): IState => {
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
