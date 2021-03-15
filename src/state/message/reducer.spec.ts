import reducer from './reducer';
import IMessage from './type';
import initialState from './initialState';
import {saveMessage, removeMessage} from './actions';
import VariantsEnum from '../../enums/VariantsEnum';

describe('Message reducer', () => {
    it('change state on `saveMessage` action', () => {
        const value: IMessage = {
            message: {
                variant: VariantsEnum.danger,
                content: 'Error message',
            },
        };
        const state = reducer(initialState, saveMessage(value));

        expect(state).toEqual(value);
    });

    it('change to initial message state on `removeMessage` action', () => {
        const value: IMessage = initialState;
        const state = reducer(initialState, removeMessage());

        expect(state).toEqual(value);
    });
});
