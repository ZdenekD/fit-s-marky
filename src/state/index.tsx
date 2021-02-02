import {createContext, useContext, useReducer, Dispatch} from 'react';
import initialState from './initialState';
import reducer from './reducer';
import IState from './type/state';
import IAction from './type/actions';

interface IContext {
    state: IState
    dispatch: Dispatch<IAction>
}

const StateContext = createContext<IContext>({state: initialState, dispatch: () => null});
const Provider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    );
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useStateValue = () => useContext(StateContext);

export {Provider, useStateValue};
