import IAction from '../type/actions';
import IMessage, {initialState} from './type';
import ActionsEnum from './type/actions';

const reducer = (state: IMessage, action: IAction): IMessage => {
    switch (action.type) {
        case ActionsEnum.save:
            return ({
                ...state,
                ...action.payload,
            });
        case ActionsEnum.remove:
            return ({
                ...state,
                ...initialState,
            });
        default:
            return state;
    }
};

export default reducer;
