import IState from '../type/state';
import IAction from '../type/actions';
import IMessage from './type/message';
import ActionsEnum from './type/actions';
import VariantsEnum from '../../enums/VariantsEnum';

export const initialState: IMessage = {message: {variant: VariantsEnum.info, content: undefined}};

const reducer = (state: IState, action: IAction): IState => {
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
