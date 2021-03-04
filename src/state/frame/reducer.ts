import IAction from '../type/actions';
import IFrame from './type';
import ActionsEnum from './type/actions';

const reducer = (state: IFrame, action: IAction): IFrame => {
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
