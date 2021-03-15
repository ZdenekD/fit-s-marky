import reducer from './reducer';
import IFrame from './type';
import initialState from './initialState';
import setFrame from './actions';

describe('Frame reducer', () => {
    it('change state on `setFrame` action', () => {
        const value: IFrame = {frame: {current: 47}};
        const state = reducer(initialState, setFrame(value));

        expect(state).toEqual(value);
    });
});
